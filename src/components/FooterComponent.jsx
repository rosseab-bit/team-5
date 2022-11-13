const FooterComponent = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div
            style={{
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
                backgroundColor: '#7895B2',
                color: 'black',
                textAlign: 'center'
            }}
            >
                <p>
                    {`Copyright © Upbeat Code ${year}`}
                </p>
            </div>
        </>
    );
}
export default FooterComponent;