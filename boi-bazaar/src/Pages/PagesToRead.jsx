import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import {useState, useEffect} from "react";
import {useLoaderData} from "react-router-dom";

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
    const localBooks = JSON.parse(localStorage.getItem('read'))
    const [getBooks, setBooks] = useState([]);
    const [getWidth, setWidth] = useState(0);
    const [CommonBooks, setCommonBooks] = useState([]);
    useEffect(() => {
        const commonBooks = loaderData.filter(book => localBooks.includes(book.bookId))
        setCommonBooks(commonBooks)
        CommonBooks.map(book => {
            data.push({
                name: book.bookName,
                uv: book.totalPages,
                pv: 2400,
                amt: 2400,
            })
        })
    }, []);


    useEffect(() => {
        const container = document.getElementsByClassName('container');
        const containerWidth = container[0].offsetWidth;
        setWidth(containerWidth);
    }, []);

    return (
        <BarChart className="bg-[#13131308] py-12 rounded-2xl"
            width={getWidth}
            height={524}
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
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
        </BarChart>
    );
};

export default PagesToRead;