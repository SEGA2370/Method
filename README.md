## JavaScript modules allow you to break up your code into separate files.

## This makes it easier to maintain a code-base.

## Modules are imported from external files with the import statement.

## Modules also rely on type="module" in the <script> tag.

<script type="module">
import message from "./message.js";
</script>

## Export
#### Modules with functions or variables can be stored in any external file.

#### There are two types of exports: Named Exports and Default Exports.

## Default Exports u Can only have 1 default Export

![alt text](/img5/export.PNG)





















<!-- ## Synchronous

#### What is Synchronous in JavaScript? As its base JavaScript language is synchronous. Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

![alt text](/img5/sync.PNG)

## Asynchronous JavaScript
#### In this module, we take a look at asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations, such as fetching resources from a server.

![alt text](/img5/async.PNG)


## Promise

#### Объект Promise используется для отложенных и асинхронных вычислений.

#### может находиться в трёх состояниях:

#### ожидание (pending): начальное состояние, не исполнен и не отклонён.
#### исполнено (fulfilled): операция завершена успешно.
#### отклонено (rejected): операция завершена с ошибкой.



## Try...Catch

## Try
#### Конструкция try содержит блок try, в котором находится одна или несколько инструкций (Блок ({} ) обязательно должен присутствовать, даже если выполняется всего одна инструкция), и хотя бы один блок catch или finally. Таким образом, есть три основные формы конструкции try:

### try {...} catch {...}
### try {...} finally {...}
### try {...} catch {...} finally {...}

## Catch
#### Блок catch содержит инструкции, которые будут выполнены, если в блоке try произошла ошибка. Если любая инструкция в блоке try выбрасывает исключение, то управление сразу же переходит в блок catch. Если в блок try не было выброшено исключение, то блок catch не выполняется.

## Async Await

#### Note: The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError.await can be used on its own with JavaScript modules.


## API(Aplication Programming Interface)

#### API повсеместно используют для взаимодействия программ и приложений с операционными системами или интернет-сайтами. Если бы Application Programming Interface отключились, то почти все сервисы в интернете и большинство компьютерных программ перестали бы работать.

#### С помощью API программисты могут использовать возможности разных приложений, не задумываясь о том, как эти приложения обрабатывают запросы и какой у них код.

![alt text](/img5/API.png)

## Fetch()

#### Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch() (en-US), который позволяет легко и логично получать ресурсы по сети асинхронно.

## Fetch(Get)
![alt text](/img5/awaitfetch.PNG)

## Fetch(Post)
![alt text](/img5/post.PNG)

## Fetch(Delete)
![alt text](/img5/Delete.PNG)

## Axios
![alt text](/img5/Axiosjs.jpg)
#### Что такое Axios? Axios - это HTTP-клиент, основанный на Promise для node.js и браузера. Он изоморфный (= он может работать в браузере и node.js с той же базой кодов). На стороне сервера он использует нативный node.js http -модуль, тогда как на стороне клиента (браузер) он использует XMLHttpRequests.

![alt text](/img5/Axios.PNG)

 -->



















<!-- ## Dom
#### Этот раздел представляет краткое знакомство с Объектной Моделью Документа (DOM) - что такое DOM, каким образом предоставляются структуры HTML и XML документов, и как взаимодействовать с ними. Данный раздел содержит справочную информацию и примеры.

![alt text](/img4dom/DOM.PNG)

## Document.querySelector()
#### Document метод querySelector() возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов. Если совпадений не найдено, возвращает значение null.
![alt text](/img4dom/QuerySelector.png)


## InnerHtml

#### innerHTML – самый простой способ считать или изменить HTML-содержимое элемента. Это свойство использует строки, что даёт возможность легко менять и очищать содержимое элементов. Когда в innerHTML присваивается новое значение, все предыдущее содержимое удаляется и создаётся новое, что приводит к перерисовке страницы

## Events

### 1-Пользователь кликает мышью или наводит курсор на определённый элемент.
### 2-Пользователь нажимает клавишу на клавиатуре.
### 3-Пользователь изменяет размер или закрывает окно браузера.
### 4-Завершение загрузки веб-страницы.
### 5-Отправка данных через формы.
### 6-Воспроизведение видео, пауза или завершение воспроизведения.
### 7-Произошла ошибка.
![alt text](/img4dom/Events.PNG)

## В HTML-документах создаёт элемент c тем тегом, что указан в аргументе или HTMLUnknownElement, если имя тега не распознаётся.
 
#### element — созданный объект элемента.
#### tagName — строка, указывающая элемент какого типа должен быть создан. nodeName создаётся и инициализируется со значением tagName.
#### options — необязательный параметр, объект ElementCreationOptions, который может содержать только поле is, указывающее имя пользовательского элемента, созданного с помощью customElements.define() (см. Веб-компоненты).
![alt text](/img4dom/CreateElemnt.PNG)


## appendChild()
#### Node.appendChild() добавляет узел в конец списка дочерних элементов указанного родительского узла. Если данный дочерний элемент является ссылкой на существующий узел в документе, то функция appendChild() перемещает его из текущей позиции в новую позицию (нет необходимости удалять узел из родительского узла перед добавлением его к какому-либо другому узлу).
![alt text](/img4dom/appendChild.PNG)

## Classlist()
#### ClassList является геттером. Возвращаемый им объект имеет несколько методов:

### add( String [,String] )
### Добавляет элементу указанные классы

### remove( String [,String] )
### **Удаляет у элемента указанные классы


## toggle() позволяет отобразить или скрыть выбранные элементы. Если элемент изначально отображается, то он будет скрыт, если элемент скрыт, то он будет отображен. -->






















<!-- ## Object

### Конструктор Object создаёт объект-обёртку для переданного значения. Если значением является null или undefined, создаёт и возвращает пустой объект, в противном случае возвращает объект такого типа, который соответствует переданному значению. Если значение уже является объектом, конструктор вернёт это значение.При вызове в не-конструктором контексте, Object ведёт себя идентично коду new Object().


## Object.entries

### Возвращаемое значение  Массив перечислений собственных свойств объекта с парами [key, value].
![alt text](/img3/objectentry.png)
### Описание
### Object.entries() возвращает массив, элементами которого являются массивы, соответствующие перечисляемому свойству пары [key, value], найденной прямо в object. Порядок свойств тот же, что и при прохождении циклом по свойствам объекта вручную.

### Object.keys

### Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).

![alt text](/img3/objectkey.PNG)


## Object.values()
![alt text](/img3/ovaluePNG.PNG)
### Метод Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.


##  Destructuring and Spread

###  Destructuring Object

![alt text](/img3/dest.PNG)

#### Синтаксис деструктурирующего присваивания в выражениях JavaScript позволяет извлекать данные из массивов или объектов при помощи синтаксиса, подобного объявлению массива или литералов в объекте.

### Spread

[alt text](/img3/spread.PNG)

#### Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах 
#### для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
#### для элементов (литералов массива)
#### для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов)

## This
#### Значение
### Свойство контекста выполнения кода (global, function или eval), которое в нестрогом режиме всегда является ссылкой на объект, а в строгом режиме может иметь любое значение.

## NewDate()

#### Создаёт экземпляр объекта Date, представляющего собой момент времени. Объект Дата содержит число миллисекунд прошедших с 1 января 1970 г. UTC

#### Если никаких аргументов передано не было, конструктор создаёт объект Date для текущих даты и времени, согласно системным настройкам.
#### Если передано как минимум два аргумента, отсутствующие аргументы устанавливаются в стартовые значения - день месяца 1 и время полуночи.

![alt text](/img3/Date.PNG)

## DateNow()

#### Метод Date.now() возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.

## getFullYear()

![alt text](/img3/fullyear.PNG)

#### Метод getFullYear() возвращает год указанной даты по местному времени.

## getMonth()

![alt text](/img3/Month.PNG)

#### Значение, возвращённое методом getMonth(), является целым числом от 0 до 11. 0 соответствует январю, 1 — февралю и так далее.

## getMinutes()

### Значение, возвращённое методом getMinutes(), является целым числом от 0 до 59.

### Метод setDate() устанавливает день месяца указанной даты по местному времени.

### Метод setMonth() устанавливает месяц указанной даты по местному времени.

### Метод setUTCFullYear() устанавливает полный год указанной даты по всемирному координированному времени.


























<!-- # 1-)Array Definition
# 2-)Array Methods

# 3-)Destructuring,spread and rest.

### Array is:
#### Массив в JavaScript — это упорядоченный список элементов с указанным индексом (ключом к ним). Когда мы хотим сохранить список определенных элементов, а затем получить к ним доступ с помощью одной переменной, именно тогда применяем массив

#### You can also add elements or change the elements by accessing the index value

#### Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined. For example,
![alt text](/img2/empty.PNG)


### Array Methods
![alt text](/img2/methods.PNG)

#### push()
##### Adds Element at the end of your ARRAY

### unshift()
##### Adds Element at the begining of your ARRAY
![alt text](/img2/Push-unshift.PNG)

### Pop() - Shift
#####  Removes Elements
![alt text](/img2/pop-shift.PNG)

### reverse()
##### Reverses The Array Elements

### concat()

##### Merges Couple Arrays together
![alt text](/img2/concat.PNG)

#### The includes() 
##### method returns true if an Array contains a specified string. Otherwise it returns false. The includes() method is case sensitive.


#### The indexOf() 
##### method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found.


### splice()

#### Takes 3 Parameters!. 
#### Parameter No1 from where to start
#### Parameter No2 how many to remove
#### Parameter No3 What to Add

### slice()
#### The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array.

### Takes 2 Parameters (start, end) Show from start to end Rest Cut Off!!!

## Callback Methods 
![alt text](/img2/Callback%20M%20List.PNG)

### forEach()
#### Описание Метод forEach() выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов
![alt text](/img2/forEach.PNG)

### map()
![alt text](/img2/Map.PNG)
#### Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

### find()

#### Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.

### filter() Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
![alt text](/img2/filt.PNG)

### sort()

#### Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
![alt text](/img2/sort.PNG)

### reduce()

#### Описание Метод reduce() выполняет функцию callback один раз для каждого элемента, присутствующего в массиве, за исключением пустот, принимая четыре аргумента: начальное значение (или значение от предыдущего вызова callback ), значение текущего элемента, текущий индекс и массив, по которому происходит итерация.
![alt text](/img2/reduce.PNG)

### Деструктурирующее присваивание
##### Синтаксис деструктурирующего присваивания в выражениях JavaScript позволяет извлекать данные из массивов или объектов при помощи синтаксиса, подобного объявлению массива или литералов в объекте.
![alt text](/img2/destruct.PNG)

### rest означает, что нужно взять все элементы, которые остались от деструктуризации и поместить их в массив с именем rest . Этому массиву можно дать любое имя. Rest срабатывает в самом конце, когда все остальные данные уже разложены по своим константам (или переменным). Именно поэтому он называется rest (оставшиеся).

### Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
![alt text](/img2/spread.PNG)
































### Methods Lecture1 # Methods
## 1-)String
## 2-)Number

### Method is a block of code which only runs when it is called. 
### You can pass data, known as parameters, into a method. 
### Methods are used to perform certain actions, and they are
### also known as functions.

## 1-) String
![alt text](/img/String.png)

### Definition and Usage
#### The charAt() method returns the character at a specified index (position) in a string.

#### The index of the first character is 0, the second 1, ...

## 2-) Concat!

#### The concat() method joins two or more strings.
#### The concat() method does not change the existing strings.
#### The concat() method returns a new string.
![alt text](/img/concat.PNG)

## 3-) replace && replaceAll!

#### The replace() method searches a string for a value or a regular expression.
#### The replace() method returns a new string with the value(s) replaced.
#### The replace() method does not change the original string.
![alt text](/img/replace.PNG)

## 4-) Split!

#### The split() method splits a string into an array of substrings. The split() method returns the new array. 
#### The split() method does not change the original string. If (" ") is used as separator, the string is split between words.
![alt text](/img/Split.PNG)

## 5-) Substr

#### The substr() method extracts a part of a string.
#### The substr() method begins at a specified position, and returns a specified number of characters.
#### The substr() method does not change the original string.To extract characters from the end of the string, use a negative start position.
![alt text](/img/Substr.PNG)

## 6-) substring

#### The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
#### The substring() method extracts characters from start to end (exclusive).
#### The substring() method does not change the original string.
#### If start is greater than end, arguments are swapped: (4, 1) = (1, 4). #from 1 to 4 doesnt show #4
#### Start or end values less than 0, are treated as 0.
![alt text](/img/substring.PNG)


## 7-) Slice

#### The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array.
![alt text](/img/Slice.PNG)

## 8-) toLowerCase
![alt text](/img/ToLowerCase.PNG)

## 9-) toUpperCase
![alt text](/img/ToUpperCase.PNG)

## 10-) Trim
#### Method trim() removes whitespace from both sides of a string. trim() method does not change the original string.
![alt text](/img/Trim.PNG)

## 11-) Includes

#### The includes() method returns true if a string contains a specified string. Otherwise it returns false. The includes() method is case sensitive.
![alt text](/img/includes.PNG)

## 12-) search 

#### The search() method matches a string against a regular expression **    The search() method returns the index (position) of the first match.     The search() method returns -1 if no match is found.
![alt text](/img/search.PNG)

## 13-) toString
#### Converts Number to String

## 14-) indexOf
#### The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found.
![alt text](/img/indexOf.PNG)

## 15-) Repeat

#### Repeats String Given times!



# Number Methods

### Math.round(),ceil(),floor
#### Round if 4.5 and more converts NUM to 5 else to 4

#### Floor if 4,99 Dropsdown to 4

#### Ceil if 4.1 JumpsUp to 5



### Math.max() && Math.min()
#### max returns biggest NUM
#### Min returns Smallest Num


### Math.sqrt && Math.pow

#### sqrt Returns Square Root of Number

#### The pow() method computes the power of a number by raising the second argument to the power of the first argument.

### is NAN
![alt text](/img/IsNaN.PNG)

#### Checks if it is Number or not Returns True And False
 -->
