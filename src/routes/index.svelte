<script lang="ts">
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem,
		Form,
		FormGroup,
		FormText,
		Input,
		Label,
		Icon,
		Button,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
		Card,
		CardBody,
		CardHeader,
		CardFooter,
		Row,
		Col,
		Table,
		Container,
		Media,
		Pagination,
		PaginationItem,
		PaginationLink
	} from 'sveltestrap';
	import { According, Footer } from '$lib/components';
	let open = false;
	const toggle = () => (open = !open);
	let modalOne = false;

	const toggle2 = () => (modalOne = !modalOne);
</script>

<Navbar class="shadow-soft" color="primary" light expand="md">
	<Nav navbar>
		<Form
			class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
		>
			<FormGroup>
				<Input type="text" placeholder="Busqueda" />
			</FormGroup>
		</Form>
		<Dropdown class="input-group form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 d-sm-inline-block">
			<DropdownToggle caret color="primary">Dropdown</DropdownToggle>
			<DropdownMenu>
				<DropdownItem>Some Action</DropdownItem>
				<DropdownItem>Action (disabled)</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	</Nav>

	<Nav class="ml-auto" navbar>
		<Dropdown nav inNavbar>
			<DropdownToggle nav caret
				>Wilbert Bocanegra Velazquez <Icon class="fs-icon ml-2" name="person-circle" />
			</DropdownToggle>

			<DropdownMenu right>
				<DropdownItem><Icon class="mr-2" name="person-fill" />Perfil</DropdownItem>
				<DropdownItem><Icon class="mr-2" name="gear-fill" />Configuracion</DropdownItem>
				<DropdownItem><Icon class="mr-2" name="info-circle" />Acerca de</DropdownItem>

				<DropdownItem divider />
				<DropdownItem><Icon class="mr-2" name="box-arrow-left" />Cerrar sesion</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	</Nav>
</Navbar>

<div>
	<div class="text-left px-5 pt-5">
		<h1>Clientes</h1>
	</div>
	<div class="px-5 text-right pb-5">
		<Button color="primary" on:click={toggle} class="mr-3">Registrar Cliente</Button>
		<Button color="primary" on:click={toggle2}>Registrar Organizacion</Button>
	</div>
	<div class="px-5 ">
		<Dropdown class="float-left">
			<DropdownToggle caret color="primary">Dropdown</DropdownToggle>
			<DropdownMenu>
				<DropdownItem>10</DropdownItem>
				<DropdownItem>25</DropdownItem>
				<DropdownItem>50</DropdownItem>
				<DropdownItem>100</DropdownItem>
			</DropdownMenu>
		</Dropdown>

		<Form class="float-right mb-3">
			<FormGroup>
				<Label>Buscar</Label>
				<Input />
			</FormGroup>
		</Form>
	</div>
	<div class="p-5">
		<Table class="table shadow-soft table-striped rounded">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Apellido(s)</th>
					<th>Organizacion</th>
					<th>ID</th>
					<th>Territorio</th>
					<th>Email</th>
					<th>Contacto Inicial</th>
					<th>Ultimo contacto</th>
					<th>Grupo</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>@mdo</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>@mdo</td>
					<td>@mdo</td>
				</tr><tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					<td>@mdo</td>
					<td>@mdo</td>
				</tr>
			</tbody>
		</Table>
		<Pagination class="float-right mt-3">
			<PaginationItem disabled>
				<PaginationLink first href="#" />
			</PaginationItem>
			<PaginationItem disabled>
				<PaginationLink previous href="#" />
			</PaginationItem>
			<PaginationItem active>
				<PaginationLink href="#">1</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">2</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">3</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">4</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink href="#">5</PaginationLink>
			</PaginationItem>
			<PaginationItem>
				<PaginationLink next href="#" />
			</PaginationItem>
			<PaginationItem>
				<PaginationLink last href="#" />
			</PaginationItem>
		</Pagination>
	</div>
</div>

<Modal class="modal-lg" isOpen={open} {toggle}>
	<Card class="bg-primary shadow-soft border-light p-4 ">
		<span class=" ml-auto" on:click={toggle} style="cursor:pointer;">
			<Icon name="x" />
		</span>

		<CardHeader class=" text-center pb-0">
			<h2 class="h4">Clientes</h2>
			<span>(*) Campos requeridos</span>
		</CardHeader>
		<CardBody>
			<According title="Datos Generales" isOpen>
				<Form>
					<Row>
						<Col>
							<FormGroup class="custom-file mb-5">
								<Input
									id="idFotoCliente"
									class="custom-file-label"
									type="file"
									placeholder="Busqueda"
								/>
								<Label for="idFotoCliente" class="custom-file-label">Fotos</Label>
							</FormGroup>
						</Col>
					</Row>

					<Row cols={6}>
						<Col>
							<FormGroup>
								<Label>Nombre (*)</Label>

								<Input type="text" placeholder="Nombre" />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Apellido Paterno (*)</Label>

								<Input type="text" placeholder="Apellido Paterno" />
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<FormGroup>
								<Label>Fecha Nacimiento (*)</Label>

								<Input type="date" />
							</FormGroup>
						</Col>
					</Row>
					<Row cols={6}>
						<Col>
							<FormGroup>
								<Label>Estado (*)</Label>
								<Input type="select" name="select" id="exampleSelect">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Grupo (*)</Label>
								<Input type="select" name="select" id="exampleSelect">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</According>
			<According title="Datos Personales" isOpen>
				<Form>
					<Row cols={6}>
						<Col>
							<FormGroup>
								<Label>RFC (*)</Label>

								<Input type="text" placeholder="RFC" />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>CURP (*)</Label>

								<Input type="text" placeholder="CURP" />
							</FormGroup>
						</Col>
					</Row>
					<Row cols={6}>
						<Col>
							<FormGroup>
								<Label>Email (*)</Label>

								<Input type="text" placeholder="Email" />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Telefono (*)</Label>

								<Input type="text" placeholder="Telefono" />
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</According>
			<According title="Dirección" isOpen>
				<Form>
					<Row>
						<Col>
							<FormGroup>
								<Label>Calle (*)</Label>

								<Input type="text" placeholder="Calle" />
							</FormGroup>
						</Col>
					</Row>

					<Row cols={6}>
						<Col>
							<FormGroup>
								<Label>No. Exterior (*)</Label>

								<Input type="text" placeholder="No. Exterior" />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>No. Interior (*)</Label>

								<Input type="text" placeholder="No. Interior" />
							</FormGroup>
						</Col>
					</Row>
					<Row cols={6}>
						<Col>
							<FormGroup>
								<Label>Codigo postal (*)</Label>

								<Input type="text" placeholder="Codigo Postal" />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Estado (*)</Label>

								<Input type="text" placeholder="Estado" />
							</FormGroup>
						</Col>
					</Row>
					<Row cols={6}>
						<Col>
							<FormGroup>
								<Label>Municipio (*)</Label>

								<Input type="text" placeholder="Municipio" />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Colonia (*)</Label>

								<Input type="text" placeholder="Colonia" />
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</According>
			<According title="Datos Personales" isOpen>
				<Form>
					<Row cols={12}>
						<Col>
							<FormGroup>
								<Label>Organizacion (*)</Label>

								<Input type="text" placeholder="Organizacion" />
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Observaciones (*)</Label>

								<Input type="text" placeholder="Observaciones" />
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</According>
			<According title="Datos Personales" isOpen>
				<Form>
					<Row cols={12}>
						<Col>
							<FormGroup>
								<Label>Territorio (*)</Label>
								<Input type="select">
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</According>
			<CardFooter class="text-right pt-2">
				<Button class="mr-3 text-danger" color="primary">Cancelar</Button>
				<Button color="primary" class="text-success">Aceptar</Button>
			</CardFooter>
		</CardBody>
	</Card>
</Modal>

<Modal class="modal-lg" isOpen={modalOne} toggle={toggle2}>
	<Card class="bg-primary shadow-soft border-light p-4">
		<span class=" ml-auto" on:click={toggle2} style="cursor:pointer;">
			<Icon name="x" />
		</span>

		<CardHeader class=" text-center pb-0">
			<h2 class="h4">Clientes</h2>
			<span>(*) Campos requeridos</span>
		</CardHeader>
		<CardBody>
			<According title="Datos Generales" isOpen>
				<Row cols={{ lg: 6, md: 6, sm: 6 }}>
					<Col>
						<Media
							src="https://images.squarespace-cdn.com/content/v1/5bc5dd89f8135a188f4d62a5/1590495325988-PF8T81Z87JP2TG91MPXM/ke17ZwdGBToddI8pDm48kGw894HDC1PMVLxdU743eRoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdK7vK2GZkm9Jf_XwIPqWfNH-DfCzA-nBWAGnuP-280dKX4X9JS_SRQtXcaYqNbNlJA/A+Beautiful+Loft+Airbnb+in+Tulum+-+The+Nordroom?format=750w"
							class="card-img-top rounded"
							alt="Designer desk"
						/>
					</Col>
					<Col>
						<Form>
							<FormGroup class="custom-file mb-5">
								<Input id="idLabel" class="custom-file-label" type="file" placeholder="Busqueda" />
								<Label for="idLabel" class="custom-file-label">Logo</Label>
							</FormGroup>

							<FormGroup>
								<Label>Nombre (*)</Label>

								<Input type="text" placeholder="Nombre" />
							</FormGroup>
							<FormGroup>
								<Label>Telefono</Label>

								<Input type="text" placeholder="Telefono" />
							</FormGroup>
							<FormGroup>
								<Label>Pagina Web</Label>

								<Input type="text" placeholder="Pagina Web" />
							</FormGroup>
							<FormGroup>
								<Label>Correo Electronico</Label>

								<Input type="text" placeholder="Correo Electronic" />
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</According>
			<CardFooter class="text-right pt-3">
				<Button class="mr-3 text-danger" color="primary">Cancelar</Button>
				<Button color="primary" class="text-success">Aceptar</Button>
			</CardFooter>
		</CardBody>
	</Card>
</Modal>
<Footer />
