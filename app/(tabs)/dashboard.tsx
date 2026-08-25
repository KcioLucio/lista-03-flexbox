import {StyleSheet, View, Text, Pressable, } from 'react-native';

export default function TabTwoScreen() {
return (

    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <Text style={styles.titulo}>
          🏠 Dashboard
        </Text>

        <Text style={styles.usuario}>
          👤 Usuário
        </Text>

      </View>


      {/* CONTEÚDO */}
      <View style={styles.conteudo}>

        <Text style={styles.tituloConteudo}>
          Resumo
        </Text>


        {/* GRID */}
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


      {/* MENU INFERIOR */}
      <View style={styles.menuInferior}>

        <Pressable style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>🏠</Text>
          <Text style={styles.textoMenu}>Home</Text>
        </Pressable>


        <Pressable style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>📊</Text>
          <Text style={styles.textoMenu}>Relatórios</Text>
        </Pressable>


        <Pressable style={styles.itemMenu}>
          <Text style={styles.iconeMenu}>🔔</Text>
          <Text style={styles.textoMenu}>Avisos</Text>
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
    backgroundColor: "#f2f2f2",
  },


  /* HEADER */

  header: {
    height: 80,

    backgroundColor: "black",

    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
  },

  titulo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  usuario: {
    color: "white",
    fontSize: 16,
  },


  /* CONTEÚDO */

  conteudo: {
    flex: 1,

    padding: 20,
  },

  tituloConteudo: {
    fontSize: 22,
    fontWeight: "bold",

    marginBottom: 20,
  },


  /* GRID */

  grid: {

    flexDirection: "row",

    flexWrap: "wrap",

    justifyContent: "space-between",
  },


  /* CARD */

  card: {

    width: "48%",
    height: 130,

    backgroundColor: "white",

    marginBottom: 15,

    borderRadius: 10,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#ddd",
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
    fontWeight: "bold",

    marginTop: 5,
  },


  /* MENU INFERIOR */

  menuInferior: {
    height: 75,

    backgroundColor: "black",

    flexDirection: "row",

    justifyContent: "space-around",
    alignItems: "center",
  },

  itemMenu: {
    alignItems: "center",
  },

  iconeMenu: {
    fontSize: 22,
  },

  textoMenu: {
    color: "white",

    fontSize: 12,

    marginTop: 3,
  },

});
