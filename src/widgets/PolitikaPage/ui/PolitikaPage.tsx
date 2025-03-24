const PolitikaPage = () => {
  return (
    <div className="flex flex-col mx-auto items-center max-w-[1200px] w-full text-text p-6 bona">
      <h1 className="title-h1 text-3xl font-bold text-center">Политика конфиденциальности</h1>
      <div className="mt-10 space-y-6 text-lg text-gray-700">
        <section>
          <h2 className="text-xl font-semibold">1. Общие положения</h2>
          <p>
            Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем вашу персональную
            информацию при использовании нашего сайта.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Сбор и использование информации</h2>
          <ul className="list-disc list-inside">
            <li>Мы собираем только необходимую информацию для обработки заказов и улучшения сервиса.</li>
            <li>Ваши данные используются для связи, доставки товаров и информирования об акциях.</li>
            <li>
              Мы не передаем ваши данные третьим лицам без вашего согласия, кроме случаев, предусмотренных законом.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Защита данных</h2>
          <ul className="list-disc list-inside">
            <li>Мы применяем современные технологии для защиты персональных данных.</li>
            <li>Доступ к информации ограничен и предоставляется только сотрудникам, которым он необходим.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Файлы cookies</h2>
          <p>
            Наш сайт использует файлы cookies для улучшения работы и анализа посещаемости. Вы можете отключить их в
            настройках браузера.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Права пользователей</h2>
          <ul className="list-disc list-inside">
            <li>Вы имеете право запрашивать удаление или изменение ваших данных.</li>
            <li>Вы можете отказаться от получения рекламных рассылок в любой момент.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Контактная информация</h2>
          <p>
            Если у вас есть вопросы, свяжитесь с нами: <br />
            📧 Email: info@siveno.store <br />
            📞 Телефон: +7 (913) 470-23-11
          </p>
        </section>
      </div>
    </div>
  );
};

export default PolitikaPage;
