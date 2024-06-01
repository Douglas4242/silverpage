import HP01 from './HP01.png'
import HP02 from './HP02.png'
import HP03 from './HP03.png'
import HP04 from './HP04.png'
import R01 from './R01.png'
import R02 from './R02.png'
import R03 from './R03.png'
import R04 from './R04.png'
import R05 from './R05.png'
import R06 from './R06.png'
import R07 from './R07.png'
import R08 from './R08.png'
import P01 from './P01.png'
import P02 from './P02.png'
import P03 from './P03.png'
import P04 from './P04.png'
import D01 from './D01.png'
import D02 from './D02.png'
import D03 from './D03.png'
import D04 from './D04.png'
import D05 from './D05.png'
import D06 from './D06.png'
import D07 from './D07.png'
import M01 from './M01.png'
import M02 from './M02.png'
import M03 from './M03.png'
import A01 from './A01.png'
import A02 from './A02.png'
import A03 from './A03.png'

let set_digital_price = "2,00"
let set_printed_price = "3,50"

let all_product_markers = [
    {
        id: "1",
        name: "HP01",
        category: "livros",
        collection: "HARRY POTTER",
        image: HP01,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "2",
        name: "HP02",
        category: "livros",
        collection: "HARRY POTTER",
        image: HP02,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "3",
        name: "HP03",
        category: "livros",
        collection: "HARRY POTTER",
        image: HP03,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "4",
        name: "HP04",
        category: "livros",
        collection: "HARRY POTTER",
        image: HP04,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "5",
        name: "R01",
        category: "religiosos",
        collection: "RELIGIOSOS",
        image: R01,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "6",
        name: "R02",
        category: "religiosos",
        collection: "RELIGIOSOS",
        image: R02,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "7",
        name: "R03",
        category: "religiosos",
        collection: "RELIGIOSOS",
        image: R03,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "8",
        name: "R04",
        category: "religiosos",
        collection: "RELIGIOSOS",
        image: R04,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "9",
        name: "R05",
        category: "religiosos",
        collection: "RELIGIOSOS",
        image: R05,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "10",
        name: "R06",
        category: "religiosos",
        collection: "RELIGIOSOS",
        image: R06,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "11",
        name: "R07",
        category: "religiosos",
        collection: "RELIGIOSOS",
        image: R07,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "12",
        name: "R08",
        category: "religiosos",
        collection: "RELIGIOSOS",
        image: R08,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "13",
        name: "P01",
        category: "diversos",
        collection: "PROFISSÕES",
        image: P01,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "14",
        name: "P02",
        category: "diversos",
        collection: "PROFISSÕES",
        image: P02,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "15",
        name: "P03",
        category: "diversos",
        collection: "PROFISSÕES",
        image: P03,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "16",
        name: "P04",
        category: "diversos",
        collection: "PROFISSÕES",
        image: P04,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "17",
        name: "D01",
        category: "diversos",
        collection: "LEITURA",
        image: D01,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "18",
        name: "D02",
        category: "diversos",
        collection: "VIAGEM",
        image: D02,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "19",
        name: "D03",
        category: "diversos",
        collection: "LEITURA",
        image: D03,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "20",
        name: "D04",
        category: "diversos",
        collection: "ANIVERSÁRIO",
        image: D04,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "21",
        name: "M01",
        category: "motivacionais",
        collection: "MOTIVACIONAIS",
        image: M01,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "22",
        name: "M02",
        category: "motivacionais",
        collection: "MOTIVACIONAIS",
        image: M02,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "23",
        name: "M03",
        category: "motivacionais",
        collection: "MOTIVACIONAIS",
        image: M03,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "24",
        name: "A01",
        category: "animais",
        collection: "ANIMAIS",
        image: A01,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "25",
        name: "A02",
        category: "animais",
        collection: "ANIMAIS",
        image: A02,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "26",
        name: "A03",
        category: "animais",
        collection: "ANIMAIS",
        image: A03,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "21",
        name: "D05",
        category: "diversos",
        collection: "FLORES",
        image: D05,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "22",
        name: "D06",
        category: "diversos",
        collection: "VINTAGE",
        image: D06,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "23",
        name: "D07",
        category: "diversos",
        collection: "FLORES",
        image: D07,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
]

export default all_product_markers