export default function ({$auth, redirect}) {
    if ($auth.loggendIn) {
        return redirect ('/')
    }
}
