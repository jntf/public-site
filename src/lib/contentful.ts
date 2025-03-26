import pkg from 'contentful';
const { createClient } = pkg;

// Utilisation de l'ID exact comme indiqué dans votre page contentful-test
const CONTENT_TYPE_ID = 'articles'; 

// Types pour Contentful
export interface ArticleFields {
  title: string;
  slug: string;
  publicationDate?: string;
  excerpt?: string;
  content?: any; // Rich Text format from Contentful
  category?: string;
  readingTime?: string;
  author?: string;
  authorInitials?: string;
  authorTitle?: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
      title?: string;
    };
  };
}

export interface Article {
  fields: ArticleFields;
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}

// Initialiser le client Contentful
export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT || 'master'
});

// Récupérer tous les articles
export async function getArticles(options = {}) {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: CONTENT_TYPE_ID,
      ...options
    });
    
    return entries.items as unknown as Article[];
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return [];
  }
}

// Récupérer un article par son slug
export async function getArticleBySlug(slug: string) {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: CONTENT_TYPE_ID,
      'fields.slug': slug,
      limit: 1
    });
    
    return entries.items[0] as unknown as Article;
  } catch (error) {
    console.error(`Erreur lors de la récupération de l'article avec slug ${slug}:`, error);
    return null;
  }
}

// Récupérer les articles par catégorie
export async function getArticlesByCategory(category: string) {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: CONTENT_TYPE_ID,
      'fields.category': category,
      order: '-fields.publicationDate'
    });
    
    return entries.items as unknown as Article[];
  } catch (error) {
    console.error(`Erreur lors de la récupération des articles de la catégorie ${category}:`, error);
    return [];
  }
}
