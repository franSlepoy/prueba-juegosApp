// test/useTopFive.test.js
import { describe, it, expect } from 'vitest'
import { useTopFive } from '@/composables/useTopFive'

describe('useTopFive', () => {
  it('agrega un juego al top y luego lo quita', () => {
    const { addGame, removeGame, isInTop } = useTopFive()
    const mockGame = { id: 1, name: 'Test Game' }

    addGame(mockGame)
    expect(isInTop(mockGame.id)).toBe(true)

    removeGame(mockGame.id)
    expect(isInTop(mockGame.id)).toBe(false)
  })
})
