import { ContentfulClient } from "./ContentfulUtils";

export const getAllEntriesByType = type => {
  return ContentfulClient.getEntries({ 'content_type': type }).then(entries => {
    return entries.items;
  });
};

export const getProductoById = id => {
  return ContentfulClient.getEntry(id).then(entry => {
    return {
      nombre: entry.fields.nombre,
      imagen: entry.fields.imagen.fields.file.url,
      precio: entry.fields.precio,
      descripcion: entry.fields.descripcion
    };
  });
};

export const getEstaticoByTitle = () => {
  return ContentfulClient.getEntries({ 'content_type': 'estatico' }).then(entries => {
    return entries
  })
};

export const getBlogById = id => {
  return ContentfulClient.getEntry(id).then(entry => {
    return {
      title: entry.fields.title,
      slug: entry.fields.slug,
      imagenDestacada: entry.fields.imagenDestacada.fields.file.url,
      content: entry.fields.content,
      categoria: entry.fields.categoria,
    };
  });
};
