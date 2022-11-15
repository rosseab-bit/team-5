const CardItem = ()=>{
    return (
        <>
        <div
        style={{
            display:"grid",
            gridTemplateRows: "[row] auto [row] auto"
        }}
        >
            <div
            style={{
                gridRow: "row"
            }}
            >
                <p>Item Row 1</p>
            </div>
            <div
            style={{
                gridRow: "row 2"
            }}
            >
                <p>Item Row 2</p>
            </div>

        </div>
        </>
    );
}
export default CardItem;