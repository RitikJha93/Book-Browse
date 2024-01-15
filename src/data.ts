import biography from './assets/biography_x.webp'
import birnamWood from './assets/birnam_wood.webp'
import fear from './assets/fear_is_just_a_word.webp'
import fireWeather from './assets/fire_weather.webp'
import grandTour from './assets/grand_tour.webp'
import russia from './assets/i_love_russia.webp'
import judgement from './assets/judgement_at_tokyo.webp'
import king from './assets/king.webp'
import masterSlave from './assets/master_slave.webp'
import shining from './assets/shining.webp'
import beeString from './assets/the_bee_sting.webp'
import countryOfBlind from './assets/the_country_of_the_blind.webp'
import fraud from './assets/the_fraud.webp'
import lights from './assets/the_lights.webp'
interface Books {
    id: string;
    author: string[];
    first_publish_year: number;
    title: string;
    cover_img: string;
    ratings_average: number;
    ratings_count: number;
}

export const featuredBooks: Books[] = [
    {
        id: "1",
        author: ['Paul Murray'],
        first_publish_year: 2022,
        title: "The Bee Sting",
        cover_img: beeString,
        ratings_average: 4.5,
        ratings_count: 100,
    },
    {
        id: "2",
        author: ["Catherine Lacey"],
        first_publish_year: 2020,
        title: "Biography of X",
        cover_img: biography,
        ratings_average: 3.8,
        ratings_count: 80,
    },
    {
        id: "3",
        author: ["Eleanor Catton"],
        first_publish_year: 1988,
        title: "Birnam Wood",
        cover_img: birnamWood,
        ratings_average: 3.5,
        ratings_count: 80,
    },
    {
        id: "4",
        author: ["Andrew Leland"],
        first_publish_year: 2002,
        title: "The Country of the Blind",
        cover_img: countryOfBlind,
        ratings_average: 4,
        ratings_count: 80,
    },
    {
        id: "5",
        author: ["Azam Ahmed"],
        first_publish_year: 2011,
        title: "Fear is just a word",
        cover_img: fear,
        ratings_average: 3.2,
        ratings_count: 80,
    },
    {
        id: "6",
        author: ["John Vaillant"],
        first_publish_year: 2013,
        title: "Fire Weather",
        cover_img: fireWeather,
        ratings_average: 4.5,
        ratings_count: 80,
    },
    {
        id: "7",
        author: ["Zadie Smith "],
        first_publish_year: 2016,
        title: "The Fraud",
        cover_img: fraud,
        ratings_average: 3.8,
        ratings_count: 80,
    },
];

export const popularBooks: Books[] = [
    {
        id: "1",
        author: ['Elisa Gonzalez'],
        first_publish_year: 2018,
        title: "Grand Tour",
        cover_img: grandTour,
        ratings_average: 4,
        ratings_count: 100,
    },
    {
        id: "2",
        author: ["Elena Kostyuchenko", "Ilona Yazhbin"],
        first_publish_year: 2001,
        title: "I Love Russia",
        cover_img: russia,
        ratings_average: 3.1,
        ratings_count: 80,
    },
    {
        id: "3",
        author: ["Gary J. Bass "],
        first_publish_year: 1988,
        title: "Judgement at Tokyo",
        cover_img: judgement,
        ratings_average: 4.5,
        ratings_count: 80,
    },
    {
        id: "4",
        author: ["Jonathan Eig"],
        first_publish_year: 2002,
        title: "King: A Life",
        cover_img: king,
        ratings_average: 4.1,
        ratings_count: 80,
    },
    {
        id: "5",
        author: ["Ben Lerner"],
        first_publish_year: 2001,
        title: "The Lights",
        cover_img: lights,
        ratings_average: 3.2,
        ratings_count: 80,
    },
    {
        id: "6",
        author: ["Ilyon Woo "],
        first_publish_year: 2013,
        title: "Master Slave Husband Wife",
        cover_img: masterSlave,
        ratings_average: 3.5,
        ratings_count: 80,
    },
    {
        id: "7",
        author: ["Jon Fosse", "Damion Searls"],
        first_publish_year: 2000,
        title: "A Shining",
        cover_img: shining,
        ratings_average: 3.7,
        ratings_count: 80,
    },
];

