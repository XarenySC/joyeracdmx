import { ContentfulClient } from "./ContentfulUtils";

export const getAllEntriesByType = type => {
	return ContentfulClient.getEntries({
		content_type: type,
		"fields.tipo[ne]": "Más Vendido"
	}).then(entries => {
		return entries.items;
	});
};

export const getAllBlogs = () => {
	return ContentfulClient.getEntries({
		content_type: "blog"
	}).then(entries => {
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

export const getTiposProducto = () => {
	let tipos = [];
	return getAllEntriesByType("producto").then(entries => {
		entries.forEach(entry => {
			if (!tipos.includes(entry.fields.tipo)) {
				tipos.push(entry.fields.tipo);
			}
		});
		return tipos;
	});
};

export const getColeccionesProducto = () => {
	let colecciones = [];
	return getAllEntriesByType("producto").then(entries => {
		entries.forEach(entry => {
			if (!colecciones.includes(entry.fields.coleccion)) {
				colecciones.push(entry.fields.coleccion);
			}
		});
		return colecciones;
	});
};

export const getAllProductosByTipo = type => {
	return ContentfulClient.getEntries({
		content_type: "producto",
		"fields.tipo": type
	}).then(entries => {
		return entries.items;
	});
};

export const getAllProductosByColeccion = coleccion => {
	return ContentfulClient.getEntries({
		content_type: "producto",
		"fields.coleccion": coleccion,
		"fields.tipo[ne]": "Más Vendido"
	}).then(entries => {
		return entries.items;
	});
};

export const getAllProductosByMasVendido = () => {
	return ContentfulClient.getEntries({
		content_type: "producto",
		"fields.tipo": "Más Vendido"
	}).then(entries => {
		return entries.items;
	});
};

export const getProductoByNombre = nombre => {
	return ContentfulClient.getEntries({
		content_type: "producto",
		"fields.nombre": nombre
	}).then(entries => {
		return entries.items[0];
	});
};

export const getEstaticoByTitle = title => {
	return ContentfulClient.getEntries({
		content_type: "estatico",
		"fields.title": title
	}).then(entries => {
		return entries.items[0];
	});
};

export const getBlogById = id => {
	return ContentfulClient.getEntry(id).then(entry => {
		return {
			title: entry.fields.title,
			slug: entry.fields.slug,
			imagenDestacada: entry.fields.imagenDestacada.fields.file.url,
			content: entry.fields.content,
			categoria: entry.fields.categoria
		};
	});
};

export const getCarruselEntries = () => {
	let carrusel = [];
	return ContentfulClient.getEntries({ content_type: "carrusel" }).then(
		entries => {
			entries.items.forEach(entry => {
				carrusel.push({
					title: entry.fields.title,
					subtitle: entry.fields.subtitle,
					img: entry.fields.img.fields.file.url,
					movil: entry.fields.movil.fields.file.url,
					coleccion: entry.fields.boton
				});
			});
			return carrusel;
		}
	);
};

export const getInstagramPost = () => {
	return fetch(
		"https://api.instagram.com/oembed/?url=https://www.instagram.com/p/B_ldrBkDj0v/"
	)
		.then(result => {
			return result.json();
		})
		.catch(error => {
			console.log(error);
		});
};
