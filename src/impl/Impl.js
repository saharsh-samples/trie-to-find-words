class WordSearchNode {
    constructor(crumbs, trieNode) {
        this.crumbs = crumbs
        this.trieNode = trieNode
    }
}

class Impl {

    constructor(trie) {
        this.trie = trie
    }

    findWords = (letters, minLength, maxLength) => {

        const words = {}
        const nodesToVisit = []

        // schedule available root nodes for visit
        for(let i = 0; i < letters.length; i++) {
            const letter = letters[i]
            let rootNode = this.trie.rootNodes[letter]
            if(rootNode != null) {
                nodesToVisit.push(new WordSearchNode([i], rootNode))
            }
        }

        // keep visiting nodes in queue
        while (nodesToVisit.length > 0) {

            let node = nodesToVisit.shift()

            // Add to matched words, if current node completes a word
            if(node.crumbs.length >= minLength && node.trieNode.isWord) {
                let word = ""
                node.crumbs.forEach(letterIndex => {
                    word = word + letters[letterIndex]
                })
                words[word] = word
            }

            // if already at maxLength, don't schedule any further children nodes
            if (node.crumbs.length == maxLength) {
                continue;
            }

            // schedule any eligible children
            outer: for(let i = 0; i < letters.length; i++) {

                // skip characters already in crumbs
                for (let j = 0; j < node.crumbs.length; j++) {
                    if(node.crumbs[j] === i) {
                        continue outer
                    }
                }

                const candidateNode = node.trieNode.children[letters[i]]
                if(candidateNode != null) {
                    const crumbs = [...node.crumbs]
                    crumbs.push(i)
                    nodesToVisit.push(new WordSearchNode(crumbs, candidateNode))
                }
            }
        }

        return Object.keys(words).sort()

    }

}

export default Impl
