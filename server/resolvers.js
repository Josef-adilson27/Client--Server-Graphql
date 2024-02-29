

export const resolvers = {
  Query: {
    persons: (parent,_,{context}) => context.persons,
      
    getPerson: (_, { input },{context}) =>
    context.persons.find((prs) => prs.firstName == input.firstName && prs.lastName == input.lastName ), //получаем чела по инициалам
    getPersonById:(_, {id},{context})=>context.persons.find(person=>person.id==id),
    ships: (parent,_,{context}) => context.ships,
    getShipById:(_, {id},{context})=>context.ships.find(ship=>ship.id==id)/// получаем авто по id.
  },

  Person: {
    ship: (parent,_,{context}) => {  
      return context.ships.filter((item) => item.owner == parent.firstName); //выводим авто человека в связке и с его именем
    }, 

    droid:(parent,_,{context})=>{
      return context.droids.filter((item) => item.owner == parent.firstName)
    } 

  },

  Mutation:{
    createPerson:(_,{data},{context})=>{
     
      data = {...data,
         id:context.persons.length+1,
        }
       context.persons.push(data)
      return data
    },
    updatePerson:(_,{id,data},{context})=>{
      return(context.persons[id] = {     
        id:data.id,
        firstName:data.firstName,
        lastName:data.lastName
      })          
    },
    
    removePerson:(_,{id},{context})=>{
      return context.persons =  context.persons.filter(item=>item.id != id)
    }
  } 
};
