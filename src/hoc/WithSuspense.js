import React, {Suspense} from 'react';


export const withSuspense = (MyComponent) => {

  return (props) => {
    // Обварачиваем копоненту что бы сработала ленивая загрузка
    return <Suspense fallback={<div>Загрузка...</div>}>
      <MyComponent {...props} />
    </Suspense>
  };
};


