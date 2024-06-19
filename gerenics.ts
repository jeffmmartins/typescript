interface IOwner<I>{
    name: string;
    age: number;
    state: I
}

interface IApartment{
    rooms: number;
    location: string;
}

interface Ihouse{
    floors: number;
    garden: boolean;
    rooms: number;
    location: string;
}

const apartmentOwner: IOwner<Ihouse> = {
    name: "Jeff",
    age: 35,
    state: {
        floors: 3,
        garden: true,
        rooms: 4,
        location: "Fortaleza"
    }
}