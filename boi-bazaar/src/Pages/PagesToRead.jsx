import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {useState, useEffect} from "react";
import {useLoaderData} from "react-router-dom";
import {toast} from "react-toastify";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const loaderData = useLoaderData();
    const [getWidth, setWidth] = useState(0);
    const [commonBooks, setCommonBooks] = useState([]);
    const data = []
    try{

        const localBooks = JSON.parse(localStorage.getItem('read'))
        useEffect(() => {
            if(localBooks){
                const commonBooks = loaderData.filter(book => localBooks.includes(book.bookId))
                setCommonBooks(commonBooks)
            }else{
                setCommonBooks([])
            }
        }, []);

        commonBooks.map(book => {
            const newBook = {
                name: book.bookName,
                Pages: book.totalPages,
                pv: 2400,
                amt: 2400,
            }
            data.push(newBook)
        })
    }catch (e){
        toast("No Book Found in the reading list!")
    }

    useEffect(() => {
        const container = document.getElementsByClassName('container');
        const containerWidth = container[0].offsetWidth;
        setWidth(containerWidth);
    }, []);

    return (
        <BarChart className="bg-[#13131308] py-24 rounded-2xl"
            width={getWidth}
            height={624}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="Pages" />
            <Tooltip />
            <Bar dataKey="Pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
    );
};

export default PagesToRead;