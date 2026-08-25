import {StyleSheet, View, Text, Pressable, } from 'react-native';

export default function TabTwoScreen() {
return (

    <View style={styles.container}>

      
      <View style={styles.dashTopo}>

        <Text style={styles.titulo}>
          📊 Dashboard
        </Text>

        <Text style={styles.usuario}>
          👤 Usuário
        </Text>

      </View>


     
      <View style={styles.conteudo}>
        <View>
          <Text style={styles.tituloConteudo}>
            Resumo
          </Text>
        </View>  

       
        <View style={styles.grid}>

          <View style={styles.card}>
            <Text style={styles.icone}>💰</Text>
            <Text style={styles.cardTitulo}>Vendas</Text>
            <Text style={styles.numero}>150</Text>
          </View>


          <View style={styles.card}>
            <Text style={styles.icone}>👥</Text>
            <Text style={styles.cardTitulo}>Clientes</Text>
            <Text style={styles.numero}>80</Text>
          </View>


          <View style={styles.card}>
            <Text style={styles.icone}>📦</Text>
            <Text style={styles.cardTitulo}>Produtos</Text>
            <Text style={styles.numero}>320</Text>
          </View>


          <View style={styles.card}>
            <Text style={styles.icone}>⚙️</Text>
            <Text style={styles.cardTitulo}>Configurações</Text>
            <Text style={styles.numero}>4</Text>
          </View>

        </View>

      </View>


      
      <View style={styles.menuInferior}>

        <Pressable style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>🏠</Text>
          <Text style={styles.textoMenu}>Home</Text>
        </Pressable>


        <Pressable style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>📈</Text>
          <Text style={styles.textoMenu}>Relatórios</Text>
        </Pressable>


        <Pressable style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>📅</Text>
          <Text style={styles.textoMenu}>Período</Text>
        </Pressable>


        <Pressable style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>⚙️</Text>
          <Text style={styles.textoMenu}>Config</Text>
        </Pressable>

      </View>

    </View>

  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  dashTopo: {
    flex: 0.3,
    /* paddingTop: 15, */
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    boxShadow: '0 2px 2px rgb(0,0,0,0.5)',
    
  },

  titulo: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  usuario: {
    fontSize: 16,
    fontWeight:'bold'
  },

  conteudo: {
    flex: 4,
    padding: 20,
    
    
  },

  tituloConteudo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {

    width: '45%',
    height: 130,
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    boxShadow: ' 3px 4px 4px rgb(0,0,0,0.5)',
  },

  icone: {
    fontSize: 25,
  },

  cardTitulo: {
    fontSize: 16,
    marginTop: 5,
  },

  numero: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },

   menuInferior: {
    flex:0.1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: ' 0px -2px 2px rgb(0,0,0,0.5)',
  },

  itemMenu: {
    alignItems: 'center',
  },

  iconeMenu: {
    fontSize: 22,
    boxShadow: '2px 4px 4px rgb(0,0,0,0.5)'
  },

  textoMenu: {
    fontSize: 14,
    marginTop: 4,
  },

});
