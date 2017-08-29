import { loadData } from './api'

describe('test api', () => {
  const mockFetch = jest.fn()
  afterEach(() => {
    mockFetch.mockRestore()
  })

  it('loadData should fetch correct url', () => {
    mockFetch.mockReturnValue({then: () => 'test'})
    window.fetch = mockFetch
    let received = loadData()
    expect(mockFetch.mock.calls).toEqual([['http://localhost:3000/data/data.json']])
  })
})