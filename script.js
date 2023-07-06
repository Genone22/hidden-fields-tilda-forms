<script>
function eduregion_sc(cl, pu) {
    let d = new Date(); // Создание нового объекта Date для работы с датой и временем.
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000)); // Установка времени истечения срока действия куки на 1 год.
    document.cookie = "cl_uid=" + cl + ";" + "expires=" + d.toUTCString() + ";path=/; domain=eduregion.ru"; // Установка куки "cl_uid" с заданным значением и сроком действия на домене "eduregion.ru".

    document.cookie = "publ_uid=" + pu + ";" + "expires=" + d.toUTCString() + ";path=/; domain=eduregion.ru"; // Установка куки "publ_uid" с заданным значением и сроком действия на домене "eduregion.ru".

    localStorage.setItem('cl_uid', cl); // Сохранение значения переменной "cl" в локальном хранилище.
    localStorage.setItem('publ_uid', pu); // Сохранение значения переменной "pu" в локальном хранилище.
}

t_onReady(function () {
    t_onFuncLoad('eduregion_sc', function () {
        eduregion_sc(
            (new URLSearchParams(window.location.search)).get("cl_uid"), // Извлечение значения параметра "cl_uid" из строки запроса URL.
            (new URLSearchParams(window.location.search)).get("publ_uid") // Извлечение значения параметра "publ_uid" из строки запроса URL.
        );

        setTimeout(function(){
            $("form").each(function(){
                $(this).append('<input type="hidden" name="cl_uid" value="' + (localStorage.getItem('cl_uid')=='null' ? '' : localStorage.getItem('cl_uid')) + '">'); // Добавление скрытого поля "cl_uid" с значением из локального хранилища или пустым значением, если оно равно "null".
                $(this).append('<input type="hidden" name="publ_uid" value="' + (localStorage.getItem('publ_uid')=='null' ? '' : localStorage.getItem('publ_uid')) + '">'); // Добавление скрытого поля "publ_uid" с значением из локального хранилища или пустым значением, если оно равно "null".
            });
        }, 350) // Задержка в 350 миллисекунд перед выполнением следующего блока кода.
    });
});
</script>
