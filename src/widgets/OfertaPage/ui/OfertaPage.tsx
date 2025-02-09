import React from "react";

const OfertaPage = () => {
  return (
    <div className="flex flex-col mx-auto items-center max-w-[1200px] w-full text-text p-6 bona">
      <h1 className="title-h1 text-3xl font-bold text-center">Публичная оферта</h1>
      <div className="mt-10 space-y-6 text-lg text-gray-700">
        <section>
          <h2 className="text-xl font-semibold">1. Общие положения</h2>
          <p>
            Настоящая публичная оферта (далее Оферта) является официальным предложением магазина по продаже товаров
            дистанционным способом.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Предмет оферты</h2>
          <p>
            Продавец обязуется передать товар в собственность Покупателю, а Покупатель обязуется оплатить и принять
            товар на условиях, изложенных в данной Оферте.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Оформление заказа</h2>
          <ul className="list-disc list-inside">
            <li>Заказ оформляется через сайт, телефон или мессенджеры.</li>
            <li>После оформления Покупатель получает подтверждение заказа на электронную почту.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Оплата</h2>
          <ul className="list-disc list-inside">
            <li>
              Оплата осуществляется банковскими картами, электронными кошельками или другим способом, указанным на
              сайте.
            </li>
            <li>Оплата считается завершенной после подтверждения транзакции.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Доставка</h2>
          <ul className="list-disc list-inside">
            <li>Доставка осуществляется курьерскими службами или почтой.</li>
            <li>Сроки и стоимость доставки рассчитываются при оформлении заказа.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Возврат и обмен</h2>
          <ul className="list-disc list-inside">
            <li>Возврат возможен в течение 14 дней при сохранении товарного вида.</li>
            <li>Дефектный товар подлежит обмену или возврату денежных средств.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Контактные данные</h2>
          <p>
            Если у вас есть вопросы, свяжитесь с нами: <br />
            📧 Email: support@example.com <br />
            📞 Телефон: +7 (XXX) XXX-XX-XX
          </p>
        </section>
      </div>
    </div>
  );
};

export default OfertaPage;
