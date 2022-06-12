import { shallowMount } from '@vue/test-utils'
import DeleteMe from '@/components/DeleteMe'

describe('DeleteMe.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(DeleteMe, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
