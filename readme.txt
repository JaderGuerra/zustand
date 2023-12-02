## useShallow
Lee las propiedades y confirma si verdaderamente cambiaron para
asi determinar si renderiza o no

## Zustand
indica que es mejor almacenar el estado en una variable
Ejemplo -> const bear = useBearStore(useShallow((state) => state.bears));
lo anterior es mejor que desestructurar


## persist
Almacena data en local storage