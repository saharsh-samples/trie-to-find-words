import Trie from './Trie';

it('insert and contains work as expected', () => {

    // setup
    const trie = new Trie()
    trie.insert("core")
    trie.insert("corn")
    trie.insert("cow")
    trie.insert("cower")

    expect(trie.contains("core")).toBeTruthy()
    expect(trie.contains("corn")).toBeTruthy()
    expect(trie.contains("cow")).toBeTruthy()
    expect(trie.contains("cower")).toBeTruthy()
    expect(trie.contains("cowe")).toBeFalsy()

});
