export default function getId(id) {
    return String(id)
        .split('.')
        .join('');
}
