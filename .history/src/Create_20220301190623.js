const Create = () => {
    const [] 
    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form >
                <label >Blog title:</label>
                <input
                    type="text"
                    required
                />
                <label >Blog body:</label>
                <textarea
                    required
                ></textarea>
                <label >Blog author:</label>
                <select >
                    <option value="luis">Luis</option>
                    <option value="mary">mary</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;