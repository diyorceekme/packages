import { format, compareAsc } from "date-fns"

const date = format(new Date(2022, 8, 16), 'MM/dd/yyyy')

const dates = [
    new Date(2007, 5, 3),
    new Date(2007, 5, 30),
    new Date(2007, 2, 12)
]

const res = dates.sort(compareAsc)
console.log(res[0])

function App() {
    return (
        <div>
            <p>{date}</p>
            <p>{res}</p>
        </div>
    )
}

export default App