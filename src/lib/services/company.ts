interface ICompany {
	nombre_organizacion: string;
	logo_organizacion: string;
	sitio_web: string;
	correo_electronico: string;
	telefono_organizacion: string;
	habilitado: boolean;
	activo: boolean;
}

const insert = async (file: File) => {
	const res = await fetch('http://localhost:4001/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'image/jpeg',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW5AaG90bWFpbC5jb20iLCJpYXQiOjE2NDk5NTY2MzF9.SOHGVXHeKsSxPMzVehYm7Gzgct3UzWr-b2CxYOqFpE0'
		},
		body: JSON.stringify({
			query: `
			mutation($file: Upload!) {
				singleUpload(file: $file) {
				  encoding
				  filename
				  mimetype
				}
			  }
            `,
			variables: {
				file
			}
		})
	});

	const data = await res.json();

	console.log(data);
};

export { insert };
