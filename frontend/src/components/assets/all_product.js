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
import BRI1 from './BRI1.png'
import BRI2 from './BRI2.png'
import BRI3 from './BRI3.png'
import BRI4 from './BRI4.png'
import D08 from './D08.png'
import PERS1 from './PERS1.png'
import PERS2 from './PERS2.png'
import PERS3 from './PERS3.png'
import PERS4 from './PERS4.png'



import Lei1 from './Lei1.jpg'
import Lei2 from './Lei2.jpg'
import Lei3 from './Lei3.jpg'
import Lei4 from './Lei4.jpg'
import Lei5 from './Lei5.jpg'
import Ali1 from './Ali1.jpg'
import Ali2 from './Ali2.jpg'
import Ali3 from './Ali3.jpg'
import Ali4 from './Ali4.jpg'
import Ali5 from './Ali5.jpg'
import Brid1 from './Brid1.jpg'
import Brid2 from './Brid2.jpg'
import Brid3 from './Brid3.jpg'
import Brid4 from './Brid4.jpg'
import Brid5 from './Brid5.jpg'
import Trei1 from './Trei1.jpg'
import Trei2 from './Trei2.jpg'
import Trei3 from './Trei3.jpg'
import Trei4 from './Trei4.jpg'
import Trei5 from './Trei5.jpg'



let set_digital_price = "2,00"
let set_printed_price = "3,50"

let set_standardPlanner_price = "20"
let set_specialPlanner_price = "30"

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
        id: "27",
        name: "D05",
        category: "diversos",
        collection: "FLORES",
        image: D05,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "28",
        name: "D06",
        category: "diversos",
        collection: "VINTAGE",
        image: D06,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "29",
        name: "D07",
        category: "diversos",
        collection: "FLORES",
        image: D07,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },

    {
        id: "30",
        name: "BRI1",
        category: "livros",
        collection: "BRIDGERTON",
        image: BRI1,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "31",
        name: "BRI2",
        category: "livros",
        collection: "BRIDGERTON",
        image: BRI2,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "32",
        name: "BRI3",
        category: "livros",
        collection: "BRIDGERTON",
        image: BRI3,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "33",
        name: "BRI4",
        category: "livros",
        collection: "BRIDGERTON",
        image: BRI4,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "34",
        name: "D08",
        category: "diversos",
        collection: "UNIVERSO",
        image: D08,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "35",
        name: "PERS1",
        category: "personalizados",
        collection: "PERSONALIZADOS",
        image: PERS1,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "36",
        name: "PERS2",
        category: "personalizados",
        collection: "PERSONALIZADOS",
        image: PERS2,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "37",
        name: "PERS3",
        category: "personalizados",
        collection: "PERSONALIZADOS",
        image: PERS3,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },
    {
        id: "38",
        name: "PERS4",
        category: "personalizados",
        collection: "PERSONALIZADOS",
        image: PERS4,
        digital_price: set_digital_price,
        print_price: set_printed_price
    },

    // PLANNERS

    {
        id: "501",
        name: "Lei da Atração",
        category: "planner",
        collection: "special",
        image1: Lei1,
        image2: Lei2,
        image3: Lei3,
        image4: Lei4,
        image5: Lei5,
        price: "30,00"
    },
    {
        id: "502",
        name: "Alimentação",
        category: "planner",
        collection: "special",
        image1: Ali1,
        image2: Ali2,
        image3: Ali3,
        image4: Ali4,
        image5: Ali5,
        price: "30,00"
    },
    {
        id: "503",
        name: "Bridgerton",
        category: "planner",
        collection: "normal",
        image1: Brid1,
        image2: Brid2,
        image3: Brid3,
        image4: Brid4,
        image5: Brid5,
        price: "20,00"
    },
    {
        id: "504",
        name: "Treino",
        category: "planner",
        collection: "special",
        image1: Trei1,
        image2: Trei2,
        image3: Trei3,
        image4: Trei4,
        image5: Trei5,
        price: "30,00"
    },
]

export default all_product_markers