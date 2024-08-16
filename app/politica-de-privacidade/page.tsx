import Navbar from "../components/cells/Navbar";
import Footer from "../components/organisms/Footer";
import MadeBy from "../components/organisms/MadeBy";
import MobileMenu from "../components/organisms/MobileMenu";

export default function Politica_de_privacidade() {
  return (
    <div>
      <Navbar classes="sticky_nav main-color-txt shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
      <MobileMenu />
      <main>
        <section className="pt-16">
          <div className="container max-w-[1200px]">
            <h1 className="title">Política de Privacidade</h1>
            <p>
              Esta Política de Privacidade descreve como coletamos, usamos e
              protegemos as informações pessoais dos visitantes do nosso site.
            </p>
            <h2 className="text-white font-bold mt-4">1. Dados Coletados</h2>
            <p>
              Nosso site possui um formulário localizado no rodapé, onde os
              usuários podem informar seu nome, e-mail e telefone.
            </p>

            <h2 className="text-white font-bold mt-4">2. Uso dos Dados</h2>

            <p>
              Os dados coletados através do formulário são utilizados para criar
              e enviar um e-mail para nosso endereço pessoal contendo essas
              informações.
            </p>
            <h2 className="text-white font-bold mt-4">
              3. Compartilhamento de Dados
            </h2>
            <p>Não compartilhamos os dados coletados com terceiros.</p>

            <h2 className="text-white font-bold mt-4">4. Proteção dos Dados</h2>
            <p>
              Os dados coletados são protegidos por meio de login e senha na
              plataforma que utilizamos. Embora a proteção oferecida por essas
              credenciais de acesso seja uma medida de segurança, não garantimos
              proteção completa contra todas as possíveis ameaças.
            </p>

            <h2 className="text-white font-bold mt-4">
              5. Acesso e Controle dos Dados
            </h2>
            <p>
              Atualmente, os usuários não têm a capacidade de acessar, corrigir
              ou excluir suas informações pessoais fornecidas através do
              formulário.
            </p>

            <h2 className="text-white font-bold mt-4">
              6. Alterações na Política de Privacidade
            </h2>
            <p>
              Não informamos os visitantes sobre alterações na política de
              privacidade. Recomendamos que você revise esta política
              periodicamente para se manter atualizado sobre quaisquer mudanças.
            </p>

            <h2 className="text-white font-bold mt-4">
              7. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Não utilizamos cookies ou outras tecnologias de rastreamento em
              nosso site. Se você tiver dúvidas sobre esta política de
              privacidade, entre em contato conosco.
            </p>
          </div>
        </section>
        <Footer />
        <MadeBy />
      </main>
    </div>
  );
}
