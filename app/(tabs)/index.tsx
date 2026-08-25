import { Image, StyleSheet, View, Text, TextInput, Pressable, } from 'react-native';
export default function HomeScreen() {
  return (

    <View style={styles.container}>
     
      <View style={styles.loginTopo}> 
        <Image
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfepoWeeSqlCipbauav_SkItuIk-fW0yBfqAtV51hAw&s=10'}}style={styles.logoTopo}
        />     
      </View>   
      
      <View style={styles.loginConteudo}>
        <View style={styles.linhaEmail}>
          <Text style={styles.textoConteudo}>
            E-mail:
          </Text>
          <TextInput
            style={styles.input}
            placeholder='Digite seu e-mail'
          />
        </View>

        <View style={styles.linhaSenha}>
          <Text style={styles.textoConteudo}>
            Senha:
          </Text>
          <TextInput
            style={styles.input}
            placeholder='Digite sua senha'
            secureTextEntry={true}
          />
        </View>
        
          <Pressable onPress={() => console.log('Esqueceu a Senha')} style={styles.linhaEsqueciSenha}>
            <Text style={styles.textoEsqueciSenha}>
              Esqueci a senha
            </Text>
          </Pressable>
               
          <Pressable onPress={() => console.log('Entrar')} style={styles.botao}>
            <Text style={styles.textoBotao}>
              Entrar
            </Text>
          </Pressable>        
      </View>

      <View style={styles.loginFooter}>
        <Text style={styles.textoFooter}>
          É novo por aqui?
        </Text>
        <Pressable onPress={() => console.log('Cadastrar')}>
          <Text style={styles.textoFooterCad}>
            Cadastre-se!
          </Text>
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

  loginTopo: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    
  },
  
  logoTopo:{
    width: 200, 
    height: 100, 
    borderRadius:20,
    boxShadow: '3px 4px 4px rgb(0,0,0, 0.5)',
    
  },

  loginConteudo: {
    flex: 4,
    justifyContent: 'center',
    padding: 30,
  },

  

  textoConteudo: {
    fontSize: 16,
    marginBottom: 5,
  },

  linhaEmail: {
    marginBottom: 15,
  },

  linhaSenha: {
    marginBottom: 5,
  },

  input: {
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    paddingLeft: 10,
  },

  linhaEsqueciSenha: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 20,
  },

  textoEsqueciSenha: {
    color: '#0066cc',
    textDecorationLine: 'underline',
  },

  botao: {
    height: 45,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    boxShadow: '3px 4px 4px rgb(0,0,0, 0.5)' ,
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  loginFooter: {
    flex: 0.2,
    flexDirection:'row',
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },

  textoFooter: {
    color: 'white',
    textAlign: 'center',
    
  },

  textoFooterCad:{
    color: '#0066cc',
    textAlign: 'center',
    textDecorationLine:'underline'
  }

});