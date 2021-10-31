function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var deleteDuplicates = function(head) {
    if (head === null || head.next == null) return head;
    let prev = head;
    let current = head.next;


    while (current !== null) {
        if (prev.val == current.val) {
            prev.next = current.next;
            current = current.next;
        } else {
            prev = current;
            current = current.next;
        }
    }

    return head;
};


// https://leetcode.com/problems/remove-duplicates-from-sorted-list/