import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';

const roxo = '#7C3AED';
const roxoClaro = '#EDE9FE';
const cinza = '#F3F4F6';

export default function App() {
  const [tela, setTela] = useState('home');

  return (
    <SafeAreaView style={styles.container}>
      {tela === 'home' && <Home irPara={setTela} />}
      {tela === 'psicologa' && <Psicologa voltar={() => setTela('home')} />}
      {tela === 'comunidade' && <Comunidade voltar={() => setTela('home')} />}
    </SafeAreaView>
  );
}

// Tela Inicial
function Home({ irPara }) {
  return (
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Text style={styles.titulo}>Apoio Feminino</Text>
      <Text style={styles.subtitulo}>
        Um espaço seguro para você se cuidar e buscar ajuda.
      </Text>

      <TouchableOpacity style={styles.card} onPress={() => irPara('psicologa')}>
        <Text style={styles.cardEmoji}>💬</Text>
        <Text style={styles.cardTitulo}>Conversar com uma psicóloga</Text>
        <Text style={styles.cardTexto}>
          Atendimento acolhedor e sigiloso com profissionais especializadas.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => irPara('comunidade')}>
        <Text style={styles.cardEmoji}>👭</Text>
        <Text style={styles.cardTitulo}>Comunidade de mulheres</Text>
        <Text style={styles.cardTexto}>
          Compartilhe experiências com outras mulheres que passam por situações parecidas.
        </Text>
      </TouchableOpacity>

      <View style={styles.aviso}>
        <Text style={styles.avisoTexto}>
          ⚠️ Em caso de perigo imediato, ligue 190 (Polícia Militar) ou 180
          (Central de Atendimento à Mulher).
        </Text>
      </View>
    </ScrollView>
  );
}

// Chat com Pscicóloga (simulação)
function Psicologa({ voltar }) {
  return (
    <View style={styles.tela}>
      <View style={styles.topo}>
        <TouchableOpacity onPress={voltar}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.topoTitulo}>Psicóloga Dra. Mariana</Text>
      </View>

      <ScrollView style={styles.chat} contentContainerStyle={styles.chatConteudo}>
        <View style={styles.bolhaOutro}>
          <Text style={styles.bolhaTexto}>
            Olá! Estou aqui para te ouvir. Como você está se sentindo hoje?
          </Text>
        </View>
        <View style={styles.bolhaEu}>
          <Text style={styles.bolhaTextoEu}>
            Estou angustiada, acho que preciso conversar.
          </Text>
        </View>
        <View style={styles.bolhaOutro}>
          <Text style={styles.bolhaTexto}>
            Sua coragem em buscar ajuda é um grande passo. Pode falar com calma,
            estou aqui com você. 💜
          </Text>
        </View>
      </ScrollView>

      <View style={styles.rodapeChat}>
        <TextInput
          style={styles.input}
          placeholder="Escreva sua mensagem..."
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity style={styles.botaoEnviar}>
          <Text style={styles.botaoEnviarTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Comunidade (simulação)
function Comunidade({ voltar }) {
  const posts = [
    { nome: 'Carla', texto: 'Hoje consegui sair de casa com apoio da minha família e me sinto mais leve. Não desistam. 💜' },
    { nome: 'Ana', texto: 'Alguém aqui já passou pelo atendimento de uma psicóloga pelo app? Queria saber como é.' },
    { nome: 'Júlia', texto: 'Vocês não estão sozinhas. Buscar ajuda não é fraqueza, é coragem.' },
  ];

  return (
    <View style={styles.tela}>
      <View style={styles.topo}>
        <TouchableOpacity onPress={voltar}>
          <Text style={styles.voltar}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.topoTitulo}>Comunidade de mulheres</Text>
      </View>

      <ScrollView style={styles.chat} contentContainerStyle={styles.chatConteudo}>
        {posts.map((post, i) => (
          <View key={i} style={styles.post}>
            <Text style={styles.postNome}>{post.nome}</Text>
            <Text style={styles.postTexto}>{post.texto}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  tela: { flex: 1, backgroundColor: '#FFFFFF' },
  conteudo: { padding: 20, paddingTop: 30 },

  titulo: { fontSize: 32, fontWeight: 'bold', color: roxo },
  subtitulo: { fontSize: 16, color: '#6B7280', marginTop: 8, marginBottom: 24, lineHeight: 22 },

  card: { backgroundColor: roxoClaro, borderRadius: 16, padding: 18, marginBottom: 16 },
  cardEmoji: { fontSize: 28 },
  cardTitulo: { fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginTop: 8 },
  cardTexto: { fontSize: 14, color: '#4B5563', marginTop: 4, lineHeight: 20 },

  aviso: { backgroundColor: '#FEF3C7', borderRadius: 12, padding: 14, marginTop: 8 },
  avisoTexto: { fontSize: 13, color: '#92400E', lineHeight: 19 },

  topo: {
    backgroundColor: roxo,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  voltar: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
  topoTitulo: { color: '#FFFFFF', fontSize: 17, fontWeight: 'bold', flex: 1 },

  chat: { flex: 1, backgroundColor: cinza },
  chatConteudo: { padding: 16 },

  bolhaOutro: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    maxWidth: '80%',
  },
  bolhaEu: {
    backgroundColor: roxo,
    alignSelf: 'flex-end',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    maxWidth: '80%',
  },
  bolhaTexto: { fontSize: 14, lineHeight: 20, color: '#1F2937' },
  bolhaTextoEu: { fontSize: 14, lineHeight: 20, color: '#FFFFFF' },

  rodapeChat: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: cinza,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 14,
  },
  botaoEnviar: { backgroundColor: roxo, borderRadius: 20, paddingHorizontal: 16, paddingVertical: 10 },
  botaoEnviarTexto: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },

  post: { backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, marginBottom: 10 },
  postNome: { fontSize: 14, fontWeight: 'bold', color: roxo, marginBottom: 4 },
  postTexto: { fontSize: 14, color: '#1F2937', lineHeight: 20 },
});
