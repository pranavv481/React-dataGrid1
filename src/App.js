import './App.css';
import {Container, Paper, Box} from '@material-ui/core';
import {DataGrid} from '@material-ui/data-grid'
// import {XGrid} from '@material-ui/x-grid'

const rows = [
  {
    "id": 1,
    "firstName": "Maximo",
    "lastName": "Feil",
    "email": "Laura90@yahoo.com"
  },
  {
    "id": 2,
    "firstName": "Zion",
    "lastName": "Hermann",
    "email": "Kirsten_Graham20@gmail.com"
  },
  {
    "id": 3,
    "firstName": "Ellie",
    "lastName": "Witting",
    "email": "Adriel62@hotmail.com"
  },
  {
    "id": 4,
    "firstName": "Micheal",
    "lastName": "Runolfsdottir",
    "email": "Golden19@yahoo.com"
  },
  {
    "id": 5,
    "firstName": "Nick",
    "lastName": "Yundt",
    "email": "Darrell_Fahey@gmail.com"
  },
  {
    "id": 6,
    "firstName": "Maggie",
    "lastName": "Corkery",
    "email": "Malika_Borer50@gmail.com"
  },
  {
    "id": 7,
    "firstName": "Nels",
    "lastName": "Wiza",
    "email": "Hillary_Torp@hotmail.com"
  },
  {
    "id": 8,
    "firstName": "Adam",
    "lastName": "Wunsch",
    "email": "Leonardo_Thompson63@gmail.com"
  },
  {
    "id": 9,
    "firstName": "Mazie",
    "lastName": "Lang",
    "email": "Gino_Hansen@hotmail.com"
  },
  {
    "id": 10,
    "firstName": "Harry",
    "lastName": "DuBuque",
    "email": "Shaun68@gmail.com"
  },
  {
    "id": 11,
    "firstName": "Clarabelle",
    "lastName": "DuBuque",
    "email": "Rahul_Lockman@hotmail.com"
  },
  {
    "id": 12,
    "firstName": "Yadira",
    "lastName": "Maggio",
    "email": "Jalon.Pfeffer95@hotmail.com"
  },
  {
    "id": 13,
    "firstName": "Melvina",
    "lastName": "McClure",
    "email": "Hugh88@hotmail.com"
  },
  {
    "id": 14,
    "firstName": "Delta",
    "lastName": "Rippin",
    "email": "Marjorie2@yahoo.com"
  },
  {
    "id": 15,
    "firstName": "Lou",
    "lastName": "Sporer",
    "email": "Marty.Keeling@gmail.com"
  },
  {
    "id": 16,
    "firstName": "Richard",
    "lastName": "Schultz",
    "email": "Magnolia.Dietrich@yahoo.com"
  },
  {
    "id": 17,
    "firstName": "Summer",
    "lastName": "Collier",
    "email": "Cydney94@hotmail.com"
  },
  {
    "id": 18,
    "firstName": "Arno",
    "lastName": "Hickle",
    "email": "Salvatore88@hotmail.com"
  },
  {
    "id": 19,
    "firstName": "Alda",
    "lastName": "Lockman",
    "email": "German_Anderson@hotmail.com"
  },
  {
    "id": 20,
    "firstName": "Rogelio",
    "lastName": "Smith",
    "email": "Ubaldo54@gmail.com"
  },
  {
    "id": 21,
    "firstName": "Dillan",
    "lastName": "Bode",
    "email": "Evelyn.Bernier97@gmail.com"
  },
  {
    "id": 22,
    "firstName": "Roscoe",
    "lastName": "Kovacek",
    "email": "Donald27@hotmail.com"
  },
  {
    "id": 23,
    "firstName": "Randal",
    "lastName": "Marks",
    "email": "Scotty.Dooley@hotmail.com"
  },
  {
    "id": 24,
    "firstName": "Bryana",
    "lastName": "Bartoletti",
    "email": "Mervin50@hotmail.com"
  },
  {
    "id": 25,
    "firstName": "David",
    "lastName": "Jones",
    "email": "Luther.King@hotmail.com"
  },
  {
    "id": 26,
    "firstName": "Shanie",
    "lastName": "Glover",
    "email": "Loren_Hamill@hotmail.com"
  },
  {
    "id": 27,
    "firstName": "Esta",
    "lastName": "Waelchi",
    "email": "Dale_Wintheiser@yahoo.com"
  },
  {
    "id": 28,
    "firstName": "Pansy",
    "lastName": "Harber",
    "email": "Jerad79@hotmail.com"
  },
  {
    "id": 29,
    "firstName": "Alexander",
    "lastName": "Fisher",
    "email": "Kayli_Waelchi5@yahoo.com"
  },
  {
    "id": 30,
    "firstName": "Jamel",
    "lastName": "Ondricka",
    "email": "Kallie_Satterfield50@yahoo.com"
  },
  {
    "id": 31,
    "firstName": "Aron",
    "lastName": "Terry",
    "email": "Jaunita.Jones38@hotmail.com"
  },
  {
    "id": 32,
    "firstName": "Denis",
    "lastName": "Shanahan",
    "email": "Ellsworth.Morissette@hotmail.com"
  },
  {
    "id": 33,
    "firstName": "Keenan",
    "lastName": "Mueller",
    "email": "Kattie87@gmail.com"
  },
  {
    "id": 34,
    "firstName": "Ariane",
    "lastName": "Braun",
    "email": "Pattie_Kozey79@hotmail.com"
  },
  {
    "id": 35,
    "firstName": "Oliver",
    "lastName": "McDermott",
    "email": "Giovani_Osinski56@gmail.com"
  },
  {
    "id": 36,
    "firstName": "Jacklyn",
    "lastName": "Lebsack",
    "email": "Billie.Rowe@gmail.com"
  },
  {
    "id": 37,
    "firstName": "Daisy",
    "lastName": "Kub",
    "email": "Shayne_Olson@gmail.com"
  },
  {
    "id": 38,
    "firstName": "Albina",
    "lastName": "Schuster",
    "email": "Linnea_Mosciski@hotmail.com"
  },
  {
    "id": 39,
    "firstName": "Yadira",
    "lastName": "Hoeger",
    "email": "Dewayne.Schneider@yahoo.com"
  },
  {
    "id": 40,
    "firstName": "Damaris",
    "lastName": "King",
    "email": "Kaci.Roob90@hotmail.com"
  },
  {
    "id": 41,
    "firstName": "Mittie",
    "lastName": "Cremin",
    "email": "Augustus85@yahoo.com"
  },
  {
    "id": 42,
    "firstName": "Cathryn",
    "lastName": "Abbott",
    "email": "Melody_Emard@gmail.com"
  },
  {
    "id": 43,
    "firstName": "Emie",
    "lastName": "Smitham",
    "email": "Alexie58@yahoo.com"
  },
  {
    "id": 44,
    "firstName": "Josefina",
    "lastName": "Conn",
    "email": "Sven_Hessel@yahoo.com"
  },
  {
    "id": 45,
    "firstName": "Herbert",
    "lastName": "Nikolaus",
    "email": "Alanis43@gmail.com"
  },
  {
    "id": 46,
    "firstName": "Imogene",
    "lastName": "Nitzsche",
    "email": "Iliana.Bergnaum74@gmail.com"
  },
  {
    "id": 47,
    "firstName": "Earnest",
    "lastName": "Wilderman",
    "email": "Eriberto17@hotmail.com"
  },
  {
    "id": 48,
    "firstName": "Orville",
    "lastName": "Doyle",
    "email": "Kamryn_Nienow62@yahoo.com"
  },
  {
    "id": 49,
    "firstName": "Dorthy",
    "lastName": "Wunsch",
    "email": "Lonny_Towne12@yahoo.com"
  },
  {
    "id": 50,
    "firstName": "Tressie",
    "lastName": "Feeney",
    "email": "Agnes.Lakin90@hotmail.com"
  },
  {
    "id": 51,
    "firstName": "Kylie",
    "lastName": "Witting",
    "email": "Otha.Lockman63@gmail.com"
  },
  {
    "id": 52,
    "firstName": "Tony",
    "lastName": "Willms",
    "email": "Jeffery.Bruen75@gmail.com"
  },
  {
    "id": 53,
    "firstName": "Keenan",
    "lastName": "Rogahn",
    "email": "Alberta_Rosenbaum@gmail.com"
  },
  {
    "id": 54,
    "firstName": "Raegan",
    "lastName": "Runte",
    "email": "Alta5@gmail.com"
  },
  {
    "id": 55,
    "firstName": "Gaylord",
    "lastName": "Wyman",
    "email": "Luther.Hane@hotmail.com"
  },
  {
    "id": 56,
    "firstName": "Monserrat",
    "lastName": "Balistreri",
    "email": "Toby_Fadel28@yahoo.com"
  },
  {
    "id": 57,
    "firstName": "Kylie",
    "lastName": "Wisozk",
    "email": "Alta_Langworth@gmail.com"
  },
  {
    "id": 58,
    "firstName": "Katharina",
    "lastName": "Doyle",
    "email": "Mayra88@yahoo.com"
  },
  {
    "id": 59,
    "firstName": "Kurt",
    "lastName": "Feil",
    "email": "Fern_Hills43@yahoo.com"
  },
  {
    "id": 60,
    "firstName": "Jeanne",
    "lastName": "Rosenbaum",
    "email": "Syble0@yahoo.com"
  },
  {
    "id": 61,
    "firstName": "Hazle",
    "lastName": "Kuhlman",
    "email": "Sydnie.Yost98@yahoo.com"
  },
  {
    "id": 62,
    "firstName": "Horace",
    "lastName": "Kuhn",
    "email": "Kiara.Baumbach4@yahoo.com"
  },
  {
    "id": 63,
    "firstName": "Jeffery",
    "lastName": "Stiedemann",
    "email": "Wade67@hotmail.com"
  },
  {
    "id": 64,
    "firstName": "Kennedy",
    "lastName": "Littel",
    "email": "Misael31@yahoo.com"
  },
  {
    "id": 65,
    "firstName": "Felicity",
    "lastName": "Bogan",
    "email": "Helga_Lang40@gmail.com"
  },
  {
    "id": 66,
    "firstName": "Vergie",
    "lastName": "Mohr",
    "email": "Elenor_Heller@hotmail.com"
  },
  {
    "id": 67,
    "firstName": "Durward",
    "lastName": "Tillman",
    "email": "Carroll_Howell@hotmail.com"
  },
  {
    "id": 68,
    "firstName": "Madilyn",
    "lastName": "Hermann",
    "email": "Jenifer.OReilly7@hotmail.com"
  },
  {
    "id": 69,
    "firstName": "Lambert",
    "lastName": "Schiller",
    "email": "Brittany.Kling1@yahoo.com"
  },
  {
    "id": 70,
    "firstName": "Granville",
    "lastName": "Torp",
    "email": "Magdalena.Romaguera@hotmail.com"
  },
  {
    "id": 71,
    "firstName": "Kirsten",
    "lastName": "Zboncak",
    "email": "Yessenia72@hotmail.com"
  },
  {
    "id": 72,
    "firstName": "Della",
    "lastName": "Turner",
    "email": "Ottis.Herzog@yahoo.com"
  },
  {
    "id": 73,
    "firstName": "Ike",
    "lastName": "Jones",
    "email": "Duncan_Schmitt37@hotmail.com"
  },
  {
    "id": 74,
    "firstName": "Daryl",
    "lastName": "Kautzer",
    "email": "Dudley37@hotmail.com"
  },
  {
    "id": 75,
    "firstName": "Felipe",
    "lastName": "Lebsack",
    "email": "Laura_Donnelly@gmail.com"
  },
  {
    "id": 76,
    "firstName": "Polly",
    "lastName": "Friesen",
    "email": "Annette.Muller48@yahoo.com"
  },
  {
    "id": 77,
    "firstName": "Aliya",
    "lastName": "Jenkins",
    "email": "Elinor42@hotmail.com"
  },
  {
    "id": 78,
    "firstName": "Anita",
    "lastName": "Hettinger",
    "email": "David_Medhurst58@yahoo.com"
  },
  {
    "id": 79,
    "firstName": "Charlene",
    "lastName": "Moore",
    "email": "Philip.Harvey28@hotmail.com"
  },
  {
    "id": 80,
    "firstName": "Dewayne",
    "lastName": "Stracke",
    "email": "Jerod74@yahoo.com"
  },
  {
    "id": 81,
    "firstName": "Clementine",
    "lastName": "Morissette",
    "email": "Lempi38@hotmail.com"
  },
  {
    "id": 82,
    "firstName": "Erin",
    "lastName": "MacGyver",
    "email": "Duane.Sawayn82@hotmail.com"
  },
  {
    "id": 83,
    "firstName": "Laisha",
    "lastName": "Quitzon",
    "email": "Dante_Durgan@gmail.com"
  },
  {
    "id": 84,
    "firstName": "Malcolm",
    "lastName": "Ryan",
    "email": "Savanna13@yahoo.com"
  },
  {
    "id": 85,
    "firstName": "Onie",
    "lastName": "Wehner",
    "email": "Octavia45@gmail.com"
  },
  {
    "id": 86,
    "firstName": "Brown",
    "lastName": "Lynch",
    "email": "Demario_Grant63@gmail.com"
  },
  {
    "id": 87,
    "firstName": "Rebecca",
    "lastName": "Bogan",
    "email": "Wallace.Kshlerin@hotmail.com"
  },
  {
    "id": 88,
    "firstName": "Patrick",
    "lastName": "Schamberger",
    "email": "Willard.McClure@hotmail.com"
  },
  {
    "id": 89,
    "firstName": "Joy",
    "lastName": "Hamill",
    "email": "Marina.Wiegand@yahoo.com"
  },
  {
    "id": 90,
    "firstName": "Selina",
    "lastName": "Beatty",
    "email": "Bo48@gmail.com"
  },
  {
    "id": 91,
    "firstName": "Madalyn",
    "lastName": "Beahan",
    "email": "Susie11@yahoo.com"
  },
  {
    "id": 92,
    "firstName": "Delfina",
    "lastName": "Wolff",
    "email": "Shyanne_Hoppe43@yahoo.com"
  },
  {
    "id": 93,
    "firstName": "Earlene",
    "lastName": "Huels",
    "email": "Leonora7@hotmail.com"
  },
  {
    "id": 94,
    "firstName": "Ashleigh",
    "lastName": "Grady",
    "email": "Vallie_Klein@hotmail.com"
  },
  {
    "id": 95,
    "firstName": "Twila",
    "lastName": "Jones",
    "email": "Irma19@yahoo.com"
  },
  {
    "id": 96,
    "firstName": "Harmon",
    "lastName": "Veum",
    "email": "Nathen_OKeefe@gmail.com"
  },
  {
    "id": 97,
    "firstName": "David",
    "lastName": "Herzog",
    "email": "Brandt88@yahoo.com"
  },
  {
    "id": 98,
    "firstName": "Amelie",
    "lastName": "O'Keefe",
    "email": "Melany78@gmail.com"
  },
  {
    "id": 99,
    "firstName": "Jaden",
    "lastName": "Bayer",
    "email": "Delta_Kertzmann8@gmail.com"
  },
  {
    "id": 100,
    "firstName": "Dorothy",
    "lastName": "Satterfield",
    "email": "Osborne23@hotmail.com"
  }
]

const columns = [
  {
    field:"id",
    headerName:"Id",
    flex:1,
    // disableClickEventBubbling:true
  },
  {
    field:"firstName",
    description:"this is about user first name",
    headerName:"First Name",
    flex:1,
    // disableClickEventBubbling:true
  },
  {
    field:"lastName",
    description:"this is about user last name",
    headerName:"Last Name",
    flex:1,
    // disableClickEventBubbling:true
  },
  {
    field:"email",
    headerName:"Email Address",
    flex:1,
    // disableClickEventBubbling:true
  },
]

// const sortModel = [
//   {
//     field: "firstName",
//     sort : "asc"
//   }
// ]

function App() {
  return (
    <Container>
      <Paper component={Box} style={{height:630, width:"100%"}}>
        <DataGrid rows={rows} columns={columns} pageSize={10}
        //  onRowSelected={(items)=>console.log(items)}
       // onSelectionChange={(items)=>console.log(items)}
       checkboxSelection
       sortingOrder={["asc","desc"]}
      //  sortModel={sortModel}
      // rowHeight={20}
        />
      </Paper>
    </Container>
  );
}

export default App;
