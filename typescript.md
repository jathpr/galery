### установка:

yarn add typescript -D  
`новый проект`
yarn create react-app #name# --template typescript

### базовое использование:

`boolean`
let isDone: boolean = false;

`number`
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

`string`
let name: string = "bob";
name = 'smith';

`array[]`
let list: number[] = [1, 2, 3];

`enum`
enum Color {Red, Green, Blue};
let c: Color = Color.Green;

`any`
let notSure: any = 4;
notSure = "maybe a string instead";

`void`
function warnUser(): void {
alert("This is my warning message");
}

### интерфейсы и типы

взаимозаменяемы, можно выбрать что-то одно и всегда использовать его

`type`
type User = { name: string; age: string };
type Keys = 'one' | 'two' | 'yelow'

`interface`
interface Props {
data: User[];
key: Keys;
}

### функциональные компоненты

```
  import React, { FC } from 'react'
  ...
  export const Table: FC<{data: []{key: string}}> = ({ data }) => {
  ...
```

FC - общий тип для ФК, уточнение внутри <> (Generics) - описание объекта св-в приходящего в ФК
