"use client"

import AppLayout from "@blogtron/ui/layouts/AppLayout/AppLayout"
import { useState } from "react"

import TitleInput from "../components/TitleInput/TitleInput"

export default function CreatePost() {
  const [title, setTitle] = useState("")

  const breadcrumbs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Posts",
      href: "/posts",
    },
    {
      label: "Criar post",
    },
  ]

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <TitleInput placeholder="Novo post" value={title} onChange={setTitle} />
      <p>
        Manter uma dieta saudável para o estômago é essencial para garantir o
        bem-estar geral, evitar desconfortos e promover uma boa digestão. O
        trato gastrointestinal desempenha um papel fundamental na absorção de
        nutrientes, e cuidar bem dele pode prevenir problemas como refluxo
        ácido, gastrite, úlceras e outros distúrbios digestivos. Neste post,
        exploraremos dicas práticas e informações valiosas para ajudá-lo a
        adotar uma dieta saudável e amiga do estômago. ## 1. Coma em Porções
        Menores e Mais Frequentes Uma das melhores maneiras de evitar
        sobrecarregar o estômago é dividir suas refeições em porções menores e
        comer mais frequentemente ao longo do dia. Refeições grandes podem
        causar distensão abdominal, dificultar a digestão e aumentar o risco de
        refluxo ácido. Opte por comer de 5 a 6 pequenas refeições diárias em vez
        das tradicionais 3 refeições grandes. Isso ajuda a manter os níveis de
        energia estáveis e reduz o estresse sobre o sistema digestivo.
        ![](https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)
        ## 2. Priorize Alimentos Ricos em Fibras A fibra é essencial para o bom
        funcionamento do trato gastrointestinal. Ela ajuda a prevenir a
        constipação e promove uma digestão saudável. Inclua na sua dieta
        alimentos como frutas, vegetais, grãos integrais, sementes e
        leguminosas. Exemplos incluem aveia, maçã, brócolis, lentilhas e
        sementes de chia. No entanto, lembre-se de introduzir a fibra
        gradualmente para evitar desconfortos ou gases excessivos.
        ![](https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)
        ## 3. Evite Alimentos Gordurosos e Processados Alimentos ricos em
        gordura, como frituras, fast food e produtos ultraprocessados, podem ser
        difíceis de digerir e causar desconfortos estomacais. Além disso, esses
        alimentos podem agravar condições como refluxo gastroesofágico.
        Substitua-os por opções mais saudáveis, como carnes magras, peixes,
        azeite de oliva e abacate. Também é importante evitar alimentos
        industrializados ricos em conservantes, corantes e aromatizantes
        artificiais, que podem irritar o estômago.
        ![](https://images.unsplash.com/photo-1615996001375-c7ef13294436?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)
        ## 4. Reduza o Consumo de Cafeína e Álcool Cafeína e álcool são
        substâncias que podem irritar o revestimento do estômago e aumentar a
        produção de ácido gástrico. Beber café em excesso ou consumir bebidas
        alcoólicas regularmente pode causar desconforto e agravar problemas como
        gastrite e refluxo. Tente limitar o consumo dessas substâncias e, sempre
        que possível, substituí-las por opções mais saudáveis, como chás de
        ervas ou água.
        ![](https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)
        ## 5. Hidrate-se Adequadamente A ingestão de água é crucial para a
        digestão e para a saúde geral do sistema digestivo. A água ajuda a
        dissolver os nutrientes, facilita o movimento dos alimentos pelo trato
        gastrointestinal e previne a constipação. Certifique-se de beber pelo
        menos 2 litros de água por dia, ajustando a quantidade de acordo com
        suas necessidades individuais. Evite beber grandes quantidades de água
        durante as refeições, pois isso pode diluir os sucos gástricos e
        dificultar a digestão.
        ![](https://images.unsplash.com/photo-1624948465027-6f9b51067557?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)
        ## 6. Escolha Alimentos Fáceis de Digestionar Alguns alimentos são
        naturalmente mais fáceis de digerir e podem ser especialmente úteis para
        quem tem um estômago sensível. Exemplos incluem arroz branco, batata
        cozida, banana madura, frango sem pele e sopas leves. Esses alimentos
        são menos propensos a causar irritação ou desconforto. Além disso,
        prefira métodos de cozimento como vapor, fervura ou grelha, em vez de
        fritura. ## 7. Evite Comer Tarde da Noite Comer logo antes de se deitar
        pode aumentar o risco de refluxo ácido e dificultar a digestão. Tente
        fazer sua última refeição pelo menos 2 a 3 horas antes de ir para a
        cama. Isso dá ao seu corpo tempo suficiente para digerir os alimentos
        antes de você deitar, reduzindo a chance de desconforto. ## 8. Mastigue
        Bem os Alimentos A digestão começa na boca, e mastigar bem os alimentos
        é um passo crucial para facilitar o trabalho do estômago. Quanto mais
        você mastigar, mais fácil será para o estômago processar os alimentos,
        reduzindo o risco de indigestão. Além disso, comer devagar também pode
        ajudar a evitar o excesso de comida, pois dá ao corpo tempo para
        sinalizar quando está satisfeito. ## 9. Inclua Probióticos na Dieta
        Probióticos são bactérias benéficas que ajudam a manter um equilíbrio
        saudável na flora intestinal. Eles podem melhorar a digestão e reduzir
        problemas como inchaço e constipação. Alimentos ricos em probióticos
        incluem iogurte natural, kefir, chucrute, kimchi e kombucha. Considere
        incorporar esses alimentos em sua dieta, mas consulte um médico ou
        nutricionista se tiver dúvidas. ## 10. Identifique e Evite Alimentos
        Gatilho Cada pessoa é única, e certos alimentos podem causar desconforto
        estomacal em alguns indivíduos. Preste atenção ao que você come e
        observe como seu corpo reage. Alimentos comuns que podem ser gatilhos
        incluem alimentos picantes, cítricos, chocolate, cebola e alimentos
        ricos em gordura. Manter um diário alimentar pode ser útil para
        identificar quais alimentos devem ser evitados. ## 11. Controle o
        Estresse O estresse pode ter um impacto significativo na saúde do
        estômago e do sistema digestivo. Ele pode causar sintomas como náusea,
        dor abdominal e indigestão. Pratique técnicas de gerenciamento de
        estresse, como meditação, ioga, exercícios físicos regulares e
        respiração profunda. Manter uma mente tranquila pode contribuir para o
        bom funcionamento do sistema digestivo. ## 12. Consulte um Profissional
        de Saúde Se você tiver problemas digestivos persistentes ou desconforto
        estomacal frequente, é importante procurar orientação médica. Condições
        como gastrite, úlceras e síndrome do intestino irritável podem exigir
        tratamento especializado. Um nutricionista ou gastroenterologista pode
        ajudar a criar um plano alimentar adequado às suas necessidades. ##
        Conclusão Adotar uma dieta saudável para o estômago não precisa ser
        complicado. Seguindo estas dicas e prestando atenção às necessidades do
        seu corpo, você pode promover uma digestão eficiente, prevenir
        desconfortos e melhorar sua qualidade de vida. Lembre-se de que cada
        pessoa é diferente, e o que funciona para um pode não funcionar para
        outro. Escute seu corpo, faça escolhas alimentares conscientes e busque
        ajuda profissional sempre que necessário. w
      </p>
    </AppLayout>
  )
}
