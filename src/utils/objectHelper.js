// Общая функция для изменение свойств у массива обьектов
/*
* items - массыв обьектов
* itemId - значение свойства обьекта у которого будем что то менять
* ObjPropName - название свойства по котором сравниваем обькты
* newObjProps - обьект свойст которые нужно периписать
* */
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map( u => {
    if(u[objPropName] === itemId){
      return { ...u, ...newObjProps }
    }
    return u;
  })
};
