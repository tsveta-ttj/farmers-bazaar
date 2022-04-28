import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  loadProductList() {
    //TODO make request 
    const data = [
      {
        _id: "1",
        title: "Tomatos",
        description: "Tomatoes from  Petrich",
        price: 10,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ITbfAAvaxmOLCHmFn9_kiQHaE8%26pid%3DApi&f=1",
        owner: "Ivan",
        
      },
      {
        _id: "2",
        title: "Cucumbers",
        description: "Cucumber from Plovdiv",
        price: 5,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aD_qRNNnm57QbJyQ2_TZmAHaHa%26pid%3DApi&f=1",
        owner: "Mimi",
        
      },
      {
        _id: "3",
        title: "Peppers",
        description: "Peppers from Vratsa",
        price: 10,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TkVkdkcir-TfXV-CIpJIDQHaFj%26pid%3DApi&f=1",
        owner: "Peter",
        
      },
      {
        _id: "4",
        title: "Potatoes",
        description: "Potatoes from Samokov",
        price: 3,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.WBl8DcdHHpoXx9jY_k-_gwAAAA%26pid%3DApi&f=1",
        owner: "George",
        
      },
      {
        _id: "5",
        title: "Onion",
        description: "Onion from Varna",
        price: 2,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.F1abbo3je1ITdRYhhSgbcgHaE9%26pid%3DApi&f=1",
        owner: "Anna",
        
      },
      {
        _id: "6",
        title: "Garlic",
        description: "Garlic from t Petrich",
        price: 1,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.aDLX0PS68Nm5JA8HjAvRVwHaE8%26pid%3DApi&f=1",
        owner: "Alex",
        
      },
    ]
    return data;
  }
}
