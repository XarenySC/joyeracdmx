import { ContentfulClient } from "./ContentfulUtils";

export const getAllEntries = () => {
	return ContentfulClient.getEntries().then(entries => {
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
