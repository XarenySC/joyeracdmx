import * as contentful from "contentful";

export const ContentfulClient = contentful.createClient({
	space: process.env.REACT_APP_CONTENTFUL_SPACE_TOKEN,
	accessToken: process.env.REACT_APP_CONTENTFUL_API_TOKEN
});
