import ALL_WORDS from './english-words.json';
import Impl from './Impl';
import Trie from './Trie';

export default {
    newImpl() {
        const trie = new Trie()
        ALL_WORDS.forEach(word => {
            trie.insert(word.toLowerCase())
        });
        return new Impl(trie)
    }
}
