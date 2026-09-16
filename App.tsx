import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#080B14"
      />

      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>Nova</Text>
            <Text style={styles.subtitle}>Messenger</Text>
          </View>

          <TouchableOpacity style={styles.avatar}>
            <Text style={styles.avatarText}>N</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.search}>
          <Text style={styles.searchIcon}>⌕</Text>
          <Text style={styles.searchText}>Search messages</Text>
        </View>

        {/* Chat list */}
        <View style={styles.chatList}>

          <TouchableOpacity style={styles.chat}>
            <View style={styles.chatAvatar}>
              <Text style={styles.chatAvatarText}>N</Text>
            </View>

            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Nova AI</Text>
              <Text style={styles.message}>
                Welcome to Nova Messenger
              </Text>
            </View>

            <Text style={styles.time}>Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.chat}>
            <View style={styles.chatAvatar}>
              <Text style={styles.chatAvatarText}>+</Text>
            </View>

            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>New Chat</Text>
              <Text style={styles.message}>
                Start a new conversation
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        {/* Empty area */}
        <View style={styles.empty}>
          <Text style={styles.emptyLogo}>✦</Text>
          <Text style={styles.emptyTitle}>Nova Messenger</Text>
          <Text style={styles.emptyText}>
            Fast. Private. Simple.
          </Text>
        </View>

        {/* Bottom navigation */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>💬</Text>
            <Text style={styles.navActive}>Chats</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>👥</Text>
            <Text style={styles.navText}>Contacts</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navIcon}>⚙</Text>
            <Text style={styles.navText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B14',
  },

  header: {
    height: 78,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -1,
  },

  subtitle: {
    color: '#7E8AA8',
    fontSize: 13,
    marginTop: -2,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#5865F2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  search: {
    height: 48,
    marginHorizontal: 18,
    marginTop: 4,
    marginBottom: 12,
    borderRadius: 15,
    backgroundColor: '#111625',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  searchIcon: {
    color: '#8791AA',
    fontSize: 27,
    marginRight: 9,
  },

  searchText: {
    color: '#707A94',
    fontSize: 15,
  },

  chatList: {
    paddingHorizontal: 12,
  },

  chat: {
    height: 76,
    borderRadius: 16,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  chatAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#151D35',
    borderWidth: 1,
    borderColor: '#27304A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  chatAvatarText: {
    color: '#7C8CFF',
    fontSize: 22,
    fontWeight: '800',
  },

  chatInfo: {
    flex: 1,
    marginLeft: 13,
  },

  chatName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  message: {
    color: '#737E99',
    fontSize: 13,
    marginTop: 4,
  },

  time: {
    color: '#68738E',
    fontSize: 11,
    alignSelf: 'flex-start',
    marginTop: 15,
  },

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyLogo: {
    color: '#6877FF',
    fontSize: 42,
    marginBottom: 8,
  },

  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
  },

  emptyText: {
    color: '#68738E',
    fontSize: 14,
    marginTop: 6,
  },

  bottomBar: {
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#171D2C',
    backgroundColor: '#0B0F1B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
  },

  navIcon: {
    fontSize: 20,
    marginBottom: 3,
  },

  navActive: {
    color: '#7280FF',
    fontSize: 11,
    fontWeight: '700',
  },

  navText: {
    color: '#68738E',
    fontSize: 11,
  },
});

export default App;