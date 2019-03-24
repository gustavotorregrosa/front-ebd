Vue.component('quadro-conteudo-licao', {
  template: "#quadro-conteudo-licao",
  props: ['cursos', 'cursoatual','licaoatual'],
  computed:{
    licao: function(){
      return this.cursos[this.cursoatual].licoes[this.licaoatual];
    }
  }
});


Vue.component('quadro-capa-curso-atual',{
  template: "#quadro-capa-curso-atual",
  props: ['cursos', 'cursoatual'],
  computed:{
    curso: function(){
      return this.cursos[this.cursoatual];
    }
  }
});

Vue.component('quadro-lista-licoes', {
  template: "#quadro-lista-licoes",
  props: ['cursos', 'cursoatual', 'licaoatual'],
  computed:{
    licoes: function(){
      let licoescurso = this.cursos[this.cursoatual].licoes;
      // console.log(this.licaoatual);
      licoescurso.forEach(function(licao, index){
        licao.ativa = false;
        if(index == this.licaoatual){
          licao.ativa = true;
        }        
      }, this);
      return licoescurso;
    }
  },
  methods:{
    selecionalicao: function(index){
      this.$emit('alteralicao', index);
    }
  }

});


Vue.component('menu-lateral-cursos',{
    template: "#tmpl-menu-lateral-cursos",
    props: ['cursos'],
    methods: {
      selecionacurso: function(index){
        this.$emit('evtselecionacurso', index);
      }
    },

});

var meuApp = new Vue({
  el: "#app",
  data: function() {
    return {
      cursos: [
        {
          nome: "Ensinos de Jesus",
          descricao:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus diam nec nunc iaculis pulvinar. Sed venenatis dolor at erat iaculis, vitae efficitur erat pulvinar. Fusce ullamcorper, dolor nec suscipit consequat, velit diam lacinia turpis, et euismod est nisi vel sem. Curabitur id interdum risus. Donec ligula ante, auctor id dapibus sit amet, faucibus vel est. Cras pulvinar sodales consectetur. Pellentesque dignissim dapibus iaculis. Vivamus fermentum mi euismod orci semper, a dictum ex volutpat. ",
          fotocapa: "assets/batismo-de-jesus.jpg",
          pontuacao: 10,
          checked: false,
          licoes: [
            {
              nome: 'Sermao da montanha',
              fotocapa: "assets/jesus-7.jpg",
              conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam at libero semper accumsan ut ac est. Proin at viverra lacus, sit amet tincidunt lectus. Sed dui mauris, lacinia a vehicula vel, elementum ut turpis. Aenean pretium augue euismod eros lobortis faucibus. Sed leo nisi, pulvinar ac dictum vitae, dignissim in sem. Nunc in purus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non diam sem. Maecenas efficitur mi sed massa vulputate porttitor. Integer finibus augue id lacus vehicula, a vestibulum magna tincidunt. Nullam ex odio, iaculis at lectus ac, accumsan aliquet massa. Integer eget sagittis diam. Cras non fringilla libero, et condimentum odio. Nam accumsan diam libero, sit amet molestie ligula tempus a. '
            },
            {
              nome: 'Humildade',
              fotocapa: "assets/jesus-8.jpg",
              conteudo: 'Lorem Humildade ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam at libero semper accumsan ut ac est. Proin at viverra lacus, sit amet tincidunt lectus. Sed dui mauris, lacinia a vehicula vel, elementum ut turpis. Aenean pretium augue euismod eros lobortis faucibus. Sed leo nisi, pulvinar ac dictum vitae, dignissim in sem. Nunc in purus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non diam sem. Maecenas efficitur mi sed massa vulputate porttitor. Integer finibus augue id lacus vehicula, a vestibulum magna tincidunt. Nullam ex odio, iaculis at lectus ac, accumsan aliquet massa. Integer eget sagittis diam. Cras non fringilla libero, et condimentum odio. Nam accumsan diam libero, sit amet molestie ligula tempus a. '

            },
            {
              nome: 'Parabola do samaritano',
              fotocapa: "assets/jesus-9.jpg",
              conteudo: 'Quisque in viverra nisi. Proin at nibh ante. Mauris nunc ligula, sollicitudin at nunc ut, fringilla vestibulum mauris. Ut gravida ligula non purus congue, ac lobortis est convallis. Vivamus nisl lectus, ullamcorper a elementum ac, ornare ut lorem. Phasellus id velit lorem. Fusce rhoncus turpis vitae magna ornare, nec accumsan turpis iaculis. Fusce nec neque convallis, faucibus lorem eget, rhoncus leo. Proin pellentesque turpis non risus feugiat finibus. Pellentesque hendrerit aliquet aliquam. Ut ac dui suscipit, interdum ante quis, consectetur mauris. Nam metus lorem, rhoncus eleifend neque at, accumsan imperdiet odio. Nam pellentesque vulputate nibh, ut cursus elit sodales ut. Donec urna turpis, volutpat at bibendum at, semper non mi. '
            },
          ]
        },
        {
          nome: "Conselhos de Pai",
          descricao:
            "Ut justo dui, ornare sodales lacinia ut, sagittis id justo. Nulla dapibus massa sit amet lacinia fringilla. Phasellus id cursus eros, vitae blandit augue. Fusce vehicula placerat ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin consectetur gravida facilisis. Pellentesque sodales, nunc eu euismod suscipit, leo ex consequat nunc, vitae lobortis mi metus sit amet urna. Nam sit amet consequat quam. Etiam lacus erat, euismod eu dictum ut, viverra quis turpis. Etiam diam nisl, venenatis nec feugiat nec, suscipit ut lacus. ",
            fotocapa: "assets/conselhos-pai.jpg",
            pontuacao: 15,
            checked: true,
            licoes: [
              {
                nome: 'Relacionamento com Deus',
                fotocapa: "assets/jesus-1.jpg",
                conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam at libero semper accumsan ut ac est. Proin at viverra lacus, sit amet tincidunt lectus. Sed dui mauris, lacinia a vehicula vel, elementum ut turpis. Aenean pretium augue euismod eros lobortis faucibus. Sed leo nisi, pulvinar ac dictum vitae, dignissim in sem. Nunc in purus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non diam sem. Maecenas efficitur mi sed massa vulputate porttitor. Integer finibus augue id lacus vehicula, a vestibulum magna tincidunt. Nullam ex odio, iaculis at lectus ac, accumsan aliquet massa. Integer eget sagittis diam. Cras non fringilla libero, et condimentum odio. Nam accumsan diam libero, sit amet molestie ligula tempus a. '
       
              },
              {
                nome: 'Voz do SENHOR',
                fotocapa: "assets/jesus-2.jpg",
                conteudo: 'Lorem Voz ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam at libero semper accumsan ut ac est. Proin at viverra lacus, sit amet tincidunt lectus. Sed dui mauris, lacinia a vehicula vel, elementum ut turpis. Aenean pretium augue euismod eros lobortis faucibus. Sed leo nisi, pulvinar ac dictum vitae, dignissim in sem. Nunc in purus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non diam sem. Maecenas efficitur mi sed massa vulputate porttitor. Integer finibus augue id lacus vehicula, a vestibulum magna tincidunt. Nullam ex odio, iaculis at lectus ac, accumsan aliquet massa. Integer eget sagittis diam. Cras non fringilla libero, et condimentum odio. Nam accumsan diam libero, sit amet molestie ligula tempus a. '
       

              },
              {
                nome: 'Obediência e felicidade',
                fotocapa: "assets/jesus-3.jpg",
                conteudo: 'Quisque in viverra nisi. Proin at nibh ante. Mauris nunc ligula, sollicitudin at nunc ut, fringilla vestibulum mauris. Ut gravida ligula non purus congue, ac lobortis est convallis. Vivamus nisl lectus, ullamcorper a elementum ac, ornare ut lorem. Phasellus id velit lorem. Fusce rhoncus turpis vitae magna ornare, nec accumsan turpis iaculis. Fusce nec neque convallis, faucibus lorem eget, rhoncus leo. Proin pellentesque turpis non risus feugiat finibus. Pellentesque hendrerit aliquet aliquam. Ut ac dui suscipit, interdum ante quis, consectetur mauris. Nam metus lorem, rhoncus eleifend neque at, accumsan imperdiet odio. Nam pellentesque vulputate nibh, ut cursus elit sodales ut. Donec urna turpis, volutpat at bibendum at, semper non mi. '
       
              },
            ]
          },
          
        {
          nome: "Salvação diária",
          descricao:
            "Morbi vel elit a purus vestibulum hendrerit. Ut non accumsan mi. In ac lectus diam. Morbi eget felis non lacus varius vehicula. Ut cursus leo quis leo facilisis, ac dignissim erat feugiat. Vivamus at pellentesque orci. Pellentesque varius, purus vel blandit auctor, augue lacus convallis eros, non commodo ex velit vel est. Nulla facilisi. Integer placerat condimentum felis. Cras vel mauris dapibus, feugiat dui quis, hendrerit lorem. Mauris eu viverra nulla, vitae sodales est. Nunc congue ligula ac justo pharetra mollis. Proin fringilla eleifend leo eu finibus. ",
            fotocapa: "assets/salvacao.jpg",
            pontuacao: 20,
            checked: true,
            licoes: [
              {
                nome: 'Relacionamento diário',
                fotocapa: "assets/jesus-4.jpg",
                conteudo: 'Quisque in viverra nisi. Proin at nibh ante. Mauris nunc ligula, sollicitudin at nunc ut, fringilla vestibulum mauris. Ut gravida ligula non purus congue, ac lobortis est convallis. Vivamus nisl lectus, ullamcorper a elementum ac, ornare ut lorem. Phasellus id velit lorem. Fusce rhoncus turpis vitae magna ornare, nec accumsan turpis iaculis. Fusce nec neque convallis, faucibus lorem eget, rhoncus leo. Proin pellentesque turpis non risus feugiat finibus. Pellentesque hendrerit aliquet aliquam. Ut ac dui suscipit, interdum ante quis, consectetur mauris. Nam metus lorem, rhoncus eleifend neque at, accumsan imperdiet odio. Nam pellentesque vulputate nibh, ut cursus elit sodales ut. Donec urna turpis, volutpat at bibendum at, semper non mi. '
       
              },
              {
                nome: 'Pai Nosso e dia-a-dia',
                fotocapa: "assets/jesus-5.jpg",
                conteudo: 'Quisque in viverra Pai Nosso nisi. Proin at nibh ante. Mauris nunc ligula, sollicitudin at nunc ut, fringilla vestibulum mauris. Ut gravida ligula non purus congue, ac lobortis est convallis. Vivamus nisl lectus, ullamcorper a elementum ac, ornare ut lorem. Phasellus id velit lorem. Fusce rhoncus turpis vitae magna ornare, nec accumsan turpis iaculis. Fusce nec neque convallis, faucibus lorem eget, rhoncus leo. Proin pellentesque turpis non risus feugiat finibus. Pellentesque hendrerit aliquet aliquam. Ut ac dui suscipit, interdum ante quis, consectetur mauris. Nam metus lorem, rhoncus eleifend neque at, accumsan imperdiet odio. Nam pellentesque vulputate nibh, ut cursus elit sodales ut. Donec urna turpis, volutpat at bibendum at, semper non mi. '
       
              },
              {
                nome: 'Pão de cada dia: conhecimento',
                fotocapa: "assets/jesus-6.jpg",
                conteudo: 'Pao de cada dia.Quisque in viverra nisi. Proin at nibh ante. Mauris nunc ligula, sollicitudin at nunc ut, fringilla vestibulum mauris. Ut gravida ligula non purus congue, ac lobortis est convallis. Vivamus nisl lectus, ullamcorper a elementum ac, ornare ut lorem. Phasellus id velit lorem. Fusce rhoncus turpis vitae magna ornare, nec accumsan turpis iaculis. Fusce nec neque convallis, faucibus lorem eget, rhoncus leo. Proin pellentesque turpis non risus feugiat finibus. Pellentesque hendrerit aliquet aliquam. Ut ac dui suscipit, interdum ante quis, consectetur mauris. Nam metus lorem, rhoncus eleifend neque at, accumsan imperdiet odio. Nam pellentesque vulputate nibh, ut cursus elit sodales ut. Donec urna turpis, volutpat at bibendum at, semper non mi. '
       
              },
            ]
        }
      ],

      cursoatual: 0,
      licaoatual: 0
    };
  },
  methods:{
    selecionacurso: function(index){
      this.cursoatual = index;
      this.licaoatual = 0;
      // document.querySelector('#div-quadro-listas-licoes').classList.add('hidden');
      // animateCSS('#div-quadro-capa-curso-atual', 'fadeIn', function(){
      //   document.querySelector('#div-quadro-listas-licoes').classList.remove('hidden');
      //   animateCSS('#div-quadro-listas-licoes', 'fadeIn');

      // });
     
    },
    alteralicao: function(index){
      this.licaoatual = index;
    }
  },

  computed:{
    nomeatual: function(){
      return this.cursos[this.cursoatual].nome;
    }
  }
});
