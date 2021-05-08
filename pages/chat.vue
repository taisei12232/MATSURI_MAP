<template>
  <div>
    <div class="bg-gradient-to-br from-red-400 to-blue-500 w-screen h-full">
      <Header />
      <div
        id="messageBox"
        class="pt-20 pb-48 overflow-y-scroll scrollbar-none mx-auto max-w-4xl h-screen bg-white-blur"
      >
        <div v-for="chat in chats" :key="chat.id" class="flex flex-col">
          <Message :message="chat.sentence" :chat-id="chat.userId" />
        </div>
        <ChatFooter />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { firebase } from '@/infrastructures/firebase'
import { Chat } from '@/entities/chat'
import Message from '@/components/Message.vue'
import ChatFooter from '@/components/ChatFooter.vue'
import GetChatUsecase from '@/usecase/chat/getChatUsecase'
import FetchChatUsecase from '@/usecase/chat/fetchChatUsecase'
import SubscribeChatUsecase from '@/usecase/chat/subscribeChatUsecase'
import GetUserUsecase from '@/usecase/auth/getUserUsecase'
import SubscribeUserUsecase from '@/usecase/auth/subscribeUserUsecase'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
const getChatUsecase = new GetChatUsecase()
const fetchChatUsecase = new FetchChatUsecase()
const subscribeChatUsecase = new SubscribeChatUsecase()
const getUserUsecase = new GetUserUsecase()
const subscribeUserUsecase = new SubscribeUserUsecase()

export default Vue.extend({
  components: {
    Header,
    Message,
    ChatFooter,
    Footer,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  async fetch({ store }: Context) {
    await fetchChatUsecase.execute(store)
  },
  computed: {
    chats(): Chat[] {
      return getChatUsecase.execute(this.$store)
    },
    user(): firebase.User | null {
      return getUserUsecase.execute(this.$store)
    },
  },
  watch: {
    chats: {
      handler() {
        const vm = this as any
        window.setTimeout(vm.scroolToBottom, 100)
      },
      deep: true,
    },
  },
  created() {
    subscribeUserUsecase.execute(this.$store)
    subscribeChatUsecase.execute(this.$store)
  },
  mounted() {
    const vm = this as any
    vm.scroolToBottom()
    window.setTimeout(() => {
      vm.isLoading = false
    }, 1000)
  },
  destroyed() {
    subscribeChatUsecase.clear(this.$store)
    subscribeUserUsecase.clear(this.$store)
  },
  methods: {
    scroolToBottom() {
      const element = document.getElementById('messageBox')
      if (!element) return
      element.scrollTop = element.scrollHeight
    },
  },
})
</script>
<style scoped>
.scrollbar-none {
  -ms-overflow-style: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
