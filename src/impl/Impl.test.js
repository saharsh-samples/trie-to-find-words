import Impl from './Impl';
import Trie from './Trie';

it('findWords works as expected', () => {

    // arrange
    const trie = new Trie()
    trie.insert("core")
    trie.insert("corn")
    trie.insert("cow")
    trie.insert("cower")

    // act
    const impl = new Impl(trie)
    const found = impl.findWords([ 'c', 'e', 'o', 'r', 'w' ], 3, 6)

    // assert
    expect(found.length).toBe(3)
    expect(found.includes("core")).toBeTruthy()
    expect(found.includes("corn")).toBeFalsy()
    expect(found.includes("cow")).toBeTruthy()
    expect(found.includes("cower")).toBeTruthy()

});
