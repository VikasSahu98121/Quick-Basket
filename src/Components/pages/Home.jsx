import { Banner } from './Banner';
import { Apidata } from '../../assets/api/Getapidata';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProduct } from '../Redux data/Product';
import { useSelector } from 'react-redux';
import { ProductCard } from './Productcard';
import { Container, Row, Col } from 'react-bootstrap';
import { Spinner } from './Spinner';
import CategoriesBanner from './CategoriesBanner';


export const Home = () => {
    const dispatch = useDispatch();
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const Productstore = useSelector((state) => state.products.Products)
    const fetchApiProducts = async () => {
        if (loading) return;
        setLoading(true);
        try {
            setLoading(true);
            console.log(loading)
            setTimeout(async () => {
                const response = await Apidata(skip);
               
                 
 console.log("vikas")
                dispatch(setProduct(response.result.products))
                setSkip((prev) => prev + 20);
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error("Error fetching data", error);
            setLoading(false);
        }
    };
    const handlescroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 50 && !loading) {
            fetchApiProducts();
        }
    }

    useEffect(() => {
        if (Productstore.length === 0) {
            fetchApiProducts();
        }

    }, []);
    useEffect(() => {
        window.addEventListener("scroll", handlescroll);
        return () => window.removeEventListener("scroll", handlescroll)
    }, [loading, skip])

    return (
        <>
            
            <Container fluid>
                <Row className='h-100'>
                    <Col>
                    <Banner />
                    </Col>
                </Row>
                
                <CategoriesBanner></CategoriesBanner>
                <Row xs={1} sm={2} md={4} lg={5} xl={6} className=" mx-4 g-4">
                    {
                        Productstore.map((item) => (
                            <Col key={item.id}>
                                <ProductCard data={item}></ProductCard>
                            </Col>
                        ))
                    }
                </Row>
                {
                    loading && <Spinner state={loading} size={10} ></Spinner>
                }
            </Container>
        </>
    )
}

