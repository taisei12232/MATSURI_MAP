import axios from 'axios'

class Functions {
  endpoint: string

  constructor() {
    this.endpoint =
      'https://us-central1-graphite-willow-312514.cloudfunctions.net/'
  }

  async getStand(standId: string) {
    const url = `${this.endpoint}get_stand?stand_id=${standId}`
    const res = await axios.get(url)
    return res.data
  }

  async getStandList() {
    const url = `${this.endpoint}get_stand_list`
    const res = await axios.get(url)
    return res.data.stands
  }

  async searchStands(text: string) {
    const url = `${this.endpoint}search_stands?query=${text}`
    const res = await axios.get(url)
    return res.data.stands
  }

  async record(uuid: string, stand_id: string, payment: number) {
    const url = `${this.endpoint}record`
    const res = await axios.post(url, { uuid, stand_id, payment })
    return res.data
  }

  async registerCard(uuid: string, card_number: string) {
    const url = `${this.endpoint}register_card`
    const res = await axios.post(url, { uuid, card_number })
    return res.data
  }

  async checkAdmin(uuid: string) {
    const url = `${this.endpoint}check_admin?uuid=${uuid}`
    const res = await axios.get(url)
    return res.data.result
  }

  async recordCach(stand_id: string, payment: number) {
    const url = `${this.endpoint}record_cash`
    const res = await axios.post(url, { stand_id, payment })
    return res.data
  }
}

export default new Functions()
