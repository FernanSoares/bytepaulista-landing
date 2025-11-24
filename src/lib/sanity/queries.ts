export const postsQuery = `
  *[_type == "post" && published == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "categories": categories[]->title,
    "author": author->{name, "image": image.asset->url}
  }
`;

export const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body,
    "categories": categories[]->title,
    "author": author->{name, "image": image.asset->url, bio}
  }
`;

export const categoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

