import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = ( { children } ) => {
    const Inicio = () => <h1>Inicio</h1>;
    const Libros = () => <h1>Lista de Libros</h1>;
    const Layout = () => <h1>Layout</h1>;
    const Categoria = () => <h1>Categoria</h1>;
    const ItemDetailContainer = () => <h1>ItemDetailContainer</h1>;
    const Card = () => <h1>Card</h1>;
    
    return (
        <>
            <BrowserRouter>
            { children }
                <Routes>
                    <Route path="*" element={<h2>404 - Pagina no encontrada</h2>} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/listadoLibros" element={<Libros />} />
                    <Route path="/categoría/:categoria" element={<Categoria />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/libros" element={<Libros/>} />
                    <Route path="/layout" element={<Layout />}></Route>
                    <Route path="/inicio" element={<Inicio />}></Route>
                    <Route path="/categoria" element={<Categoria />}></Route>
                    <Route card="/Tarjeta" element={<Card/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router