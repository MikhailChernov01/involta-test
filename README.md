# Описание

Панель управления контентом для HR в виде таблицы с полями:

1. ФИО
2. Должность
3. Оклад
4. Статус (соискатель/сотрудник/уволен)
5. Дата приема на работу

Параллельно может работать неограниченное кол-во HR. Данные, вносимые другими HR, моментально отображаются у всех. 
Данные хранятся в кеше браузера (LocalStorage), пока они не утеряют свою актуальность. Количество данных, передаваемых по сети, минимизировано.

 
# Stack

1. Node.js
2. WebSocket
3. ReactJS

 
# Видео
[![сервер на Node.js + ReactJS](https://lh3.googleusercontent.com/z6Sl4j9zQ88oUKNy0G3PAMiVwy8DzQLh_ygyvBXv0zVNUZ_wQPN_n7EAR2By3dhoUpX7kTpaHjRPni1MHwKpaBJbpNqdEsHZsH4q)](https://youtube.com/watch?v=-kjKtdNsJWg)

# Запуск сервера и приложения

        npm install  
        node server.js

В новом терминале:

        npm start        



